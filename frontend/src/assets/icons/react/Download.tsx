import { type SVGProps } from "react";

export const Download = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#fff"
        d="M5.25 3h13.5a1.5 1.5 0 0 1 1.5 1.5v15H3.75v-15A1.5 1.5 0 0 1 5.25 3"
        opacity=".2"
      />
      <path
        stroke="#fff"
        d="M12 13.5V3m8.25 10.5v6H3.75v-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        stroke="#fff"
        d="M15.75 9.75 12 13.5 8.25 9.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
