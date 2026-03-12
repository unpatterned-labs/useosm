import { useRef, type MouseEvent } from "react";
import { ArrowLeft } from "@/assets/icons/react/ArrowLeft";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";
import { Button } from "@/components/ui/react/button";

const OrganizationsCarousel = ({
  organizations,
}: {
  organizations: { name: string; image: string; link: string }[];
}) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.style.scrollBehavior = "smooth";
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;

    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative flex flex-col-reverse gap-6 space-y-14 md:flex-col">
      <div className="flex items-center justify-center gap-6 pr-4 md:absolute md:top-[-5.2rem] md:right-0 md:justify-end md:pr-12 lg:pr-24">
        <Button
          id="scroll-left"
          onClick={() => scroll("left")}
          variant="outline"
          className="text-grey-300 size-12 rounded-full bg-white p-0 hover:bg-green-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          id="scroll-right"
          onClick={() => scroll("right")}
          className="text-grey-300 size-12 rounded-full bg-white p-0 hover:bg-green-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      <ul
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="scrollbar-hide relative flex w-full cursor-grab items-center gap-6 overflow-x-auto py-2 pr-6 select-none"
      >
        {organizations.map((org, index) => (
          <li key={index} className="size-full">
            <a
              href={org.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              draggable={false}
              className="group flex h-[6.4rem] w-[8.125rem] flex-shrink-0 flex-col items-center gap-2 rounded-3xl bg-white p-2.5 md:h-[11.4rem] md:w-[14rem] md:gap-4 md:p-4"
            >
              <div className="flex h-[3.37rem] items-center justify-center md:h-[6.39rem]">
                <img
                  src={`/images/organizations/${org.image}`}
                  alt={org.name}
                  draggable={false}
                  className="max-h-[3.37rem] w-auto object-center transition-transform duration-300 group-hover:scale-110 md:max-h-[4.50rem]"
                />
              </div>

              <span className="text-grey-200 text-xs font-normal md:text-xl">
                {org.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationsCarousel;
