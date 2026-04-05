import { type SVGProps } from "react";

export const PlayCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g strokeWidth="2">
        <path
          stroke="currentColor"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          strokeMiterlimit="10"
        />
        <path
          stroke="currentColor"
          d="m16.125 12-6-3.75v7.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
