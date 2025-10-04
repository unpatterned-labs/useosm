import type { TSVGProps } from "src/types/shared";

export const CoffeeIcon = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 12 15"
      {...props}
    >
      <path
        d="M9.66634 6.74788L8.66634 13.4146H3.33301L2.33301 6.74788M1.99967 4.74788V4.08122C1.99967 3.7276 2.14015 3.38846 2.3902 3.13841C2.64025 2.88836 2.97939 2.74788 3.33301 2.74788H8.66634C9.01996 2.74788 9.3591 2.88836 9.60915 3.13841C9.8592 3.38846 9.99967 3.7276 9.99967 4.08122V4.74788M7.99967 2.74788V1.41455M1.33301 6.74788H10.6663V4.74788H1.33301V6.74788Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
