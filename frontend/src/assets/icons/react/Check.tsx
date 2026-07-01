import { type SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        stroke="#F3F7EF"
        d="m2.188 7.875 3.062 3.063 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".875"
      />
    </svg>
  );
};
