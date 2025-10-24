import { type SVGProps } from "react";

const Locate = (props: SVGProps<SVGSVGElement>) => {
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
        d="m16 4-4.257 11.79a.36.36 0 0 1-.655 0l-2.293-4.585L4.21 8.912a.36.36 0 0 1 0-.655z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default Locate