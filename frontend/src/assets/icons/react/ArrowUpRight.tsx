import { type SVGProps } from "react";

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 13 13"
      {...props}
    >
      <path
        stroke="currentColor"
        d="m3.176 9.53 6.353-6.353m-5.162 0H9.53v5.161"
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".794"
      />
    </svg>
  );
};
export default ArrowUpRight;
