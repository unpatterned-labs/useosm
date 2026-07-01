import { type SVGProps } from "react";

export const ArrowsInSimple = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="#50535A"
        d="M9 4v3h3m1-4L9 7M4 9h3v3m-4 1 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
