import { type SVGProps } from "react";

export const Plus = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M2.89 9h12.222M9 2.889V15.11"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
