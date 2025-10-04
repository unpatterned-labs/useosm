import type { TSVGProps } from "src/types/shared";

export const ArrowDownIcon = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 12 7"
      {...props}
    >
      <path
        d="M11 1L6 6L1 1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
