import { Code } from "@/assets/icons/react/Code";
import React from "react";
import { Button } from "../ui/react/button";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";

const CTASection = ({
  title,
  buttonText,
  buttonLink,
  buttonSize,
  buttonVariant,
}: {
  link: string;
  buttonText: string;
  buttonLink: string;
  buttonSize: "sm" | "md" | "lg" | "xl";
  buttonVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "navlink"
    | "navlinkHovered"
    | "primaryTwo";
  title: string;
}) => {
  return (
    <div className="mt-20 flex w-full flex-col items-center gap-8 md:gap-8">
      <div className="flex items-center gap-2">
        <span className="text-grey-300 text-2xl font-medium">{title}</span>
        <Code className="size-8" />
      </div>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        id={`cta-${buttonText}`}
        href={buttonLink}
        className="w-fit no-underline"
        target="_blank"
      >
        {buttonText}
        <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
          <ArrowRight className="text-green-300" />
        </div>
      </Button>
    </div>
  );
};

export default CTASection;
