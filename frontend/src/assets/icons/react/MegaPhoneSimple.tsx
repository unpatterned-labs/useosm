import { type SVGProps } from "react";

export const MegaphoneSimple = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#83AA63"
          d="m7.633 4.708 6.389-1.96a.545.545 0 0 1 .698.523v9.813a.545.545 0 0 1-.698.523l-6.39-1.96z"
          opacity=".2"
        />
        <path
          stroke="#83AA63"
          d="M2.028 9.928a.545.545 0 0 1-.392-.524V6.951a.545.545 0 0 1 .392-.523l11.994-3.68a.545.545 0 0 1 .698.523v9.813a.545.545 0 0 1-.698.524z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.09"
        />
        <path
          stroke="#83AA63"
          d="M4.362 10.643v2.441a.545.545 0 0 0 .545.545h2.18a.545.545 0 0 0 .546-.545V4.708"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.09"
        />
      </g>
    </svg>
  );
};
