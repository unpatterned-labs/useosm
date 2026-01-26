import { type SVGProps } from "react";

const Minus = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M15 10H5"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Minus;
