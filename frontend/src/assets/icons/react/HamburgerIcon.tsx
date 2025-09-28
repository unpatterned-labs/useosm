import type { TSVGProps } from "src/types/shared";

export const HamburgerIcon = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clip-path="url(#clip0_2801_5591)">
        <path
          d="M3.75 12H20.25"
          stroke="currentColor"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 6H20.25"
          stroke="currentColor"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 18H20.25"
          stroke="currentColor"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
