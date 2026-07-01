import { type SVGProps } from "react";

export const Code = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#a)">
        <path fill="#83AA63" d="m24 21 6-5-6-5H8l-6 5 6 5z" opacity=".2" />
        <path
          stroke="#83AA63"
          d="m8 11-6 5 6 5m16-10 6 5-6 5M20 5l-8 22"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
