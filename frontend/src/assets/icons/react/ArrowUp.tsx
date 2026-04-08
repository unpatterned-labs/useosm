import { type SVGProps } from "react";

const ArrowUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M10.467 17.663V3.271M4.58 9.159l5.887-5.888 5.888 5.888"
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.308"
      />
    </svg>
  );
};
export default ArrowUp;
