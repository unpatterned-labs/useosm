import { useRef } from "react";
import { ArrowLeft } from "@/assets/icons/react/ArrowLeft";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";
import { Button } from "@/components/ui/react/button";

const OrganizationsCarousel = ({
  organizations,
}: {
  organizations: { name: string; image: string; link: string }[];
}) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust for scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
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
        className="scrollbar-hide relative flex w-full items-center gap-6 overflow-x-auto scroll-smooth py-2 pr-6"
      >
        {organizations.map((org, index) => (
          <li key={index} className="size-full">
            <a
              href={org.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[6.4rem] w-[8.125rem] flex-shrink-0 flex-col items-center gap-2 rounded-3xl bg-white p-2.5 md:h-[11.4rem] md:w-[14rem] md:gap-4 md:p-4"
            >
              <div className="flex h-[3.37rem] items-center justify-center md:h-[6.39rem]">
                <img
                  src={org.image}
                  alt={org.name}
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
