import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowLeft } from "@/assets/icons/react/ArrowLeft";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";
import { Button } from "@/components/ui/react/button";
import gsap from "gsap";

const OrganizationsCarousel = ({
  organizations,
}: {
  organizations: { name: string; image: string; link: string }[];
}) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startTransform = useRef(0);
  const hasDragged = useRef(false);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const loopedOrganizations = [...organizations, ...organizations];

  const getCurrentX = (): number => {
    if (!trackRef.current) return 0;
    const matrix = window.getComputedStyle(trackRef.current).transform;
    return matrix !== "none" ? parseFloat(matrix.split(",")[4]) : 0;
  };

  const updateArrows = (x: number) => {
    if (!trackRef.current || !containerRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const containerWidth = containerRef.current.offsetWidth;
    const maxScroll = -(halfWidth - containerWidth);

    setShowLeft(x < -4);
    setShowRight(x > maxScroll + 4);
  };

  const resumeAnimation = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const width = el.scrollWidth / 2;
    const currentX = getCurrentX();

    animationRef.current?.kill();

    const remaining = Math.abs(-width - currentX);
    const duration = (remaining / width) * 60;

    animationRef.current = gsap.to(el, {
      x: -width,
      duration,
      ease: "none",
      onUpdate: () => updateArrows(getCurrentX()),
      onComplete: () => {
        gsap.set(el, { x: 0 });
        animationRef.current = gsap.to(el, {
          x: -width,
          duration: 60,
          ease: "none",
          repeat: -1,
          onUpdate: () => updateArrows(getCurrentX()),
          modifiers: {
            x: (x) => (parseFloat(x) % width) + "px",
          },
        });
      },
    });
  };

  const pauseAnimation = () => {
    animationRef.current?.pause();
  };

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    animationRef.current?.kill();

    gsap.to(trackRef.current, {
      x: direction === "left" ? "+=400" : "-=400",
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => updateArrows(getCurrentX()),
      onComplete: resumeAnimation,
    });
  };

  const handleMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    animationRef.current?.pause();

    startX.current = e.pageX;
    startTransform.current = getCurrentX();
    trackRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    resumeAnimation();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      if (trackRef.current) trackRef.current.style.cursor = "grab";
    }
    resumeAnimation();
  };

  const handleMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();

    const walk = (e.pageX - startX.current) * 1.2;
    if (Math.abs(walk) > 5) hasDragged.current = true;

    const newX = startTransform.current + walk;
    gsap.set(trackRef.current, { x: newX });
    updateArrows(newX);
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const width = el.scrollWidth / 2;

    updateArrows(0);

    animationRef.current = gsap.to(el, {
      x: -width,
      duration: 60,
      ease: "none",
      repeat: -1,
      onUpdate: () => updateArrows(getCurrentX()),
      modifiers: {
        x: (x) => (parseFloat(x) % width) + "px",
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [organizations]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative flex flex-col-reverse gap-6 md:flex-col">
      <div className="flex items-center justify-center gap-6 pr-4 md:absolute md:top-[-5.2rem] md:right-0 md:justify-end md:pr-12 lg:pr-24">
        <Button
          id="left-button"
          onClick={() => scroll("left")}
          variant="outline"
          disabled={!showLeft}
          className={`text-grey-300 size-12 rounded-full bg-white p-0 transition-opacity duration-300 hover:bg-green-400 hover:text-white ${
            showLeft ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <Button
          id="right-button"
          onClick={() => scroll("right")}
          disabled={!showRight}
          className={`text-grey-300 size-12 rounded-full bg-white p-0 transition-opacity duration-300 hover:bg-green-400 hover:text-white ${
            showRight ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden">
        <ul
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="flex w-max cursor-grab items-center gap-6 px-4 py-2 select-none"
        >
          {loopedOrganizations.map((org, index) => (
            <li
              key={index}
              className="flex-shrink-0"
              onMouseEnter={pauseAnimation}
              onMouseLeave={resumeAnimation}
            >
              <a
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                draggable={false}
                className="group flex h-[6.4rem] w-[8.125rem] flex-col items-center gap-2 rounded-3xl bg-white p-2.5 md:h-[11.4rem] md:w-[14rem] md:gap-4 md:p-4"
              >
                <div className="flex h-[3.37rem] items-center justify-center md:h-[6.39rem]">
                  <img
                    src={`/images/organizations/${org.image}`}
                    alt={org.name}
                    draggable={false}
                    className="max-h-[3.37rem] w-auto transition-transform duration-300 group-hover:scale-110 md:max-h-[4.5rem]"
                  />
                </div>
                <span className="text-grey-200 text-xs md:text-xl">
                  {org.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrganizationsCarousel;
