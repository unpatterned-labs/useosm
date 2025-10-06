import ArrowRight from "@/assets/icons/astro/ArrowRight.astro";
import ArrowLeft from "@/assets/icons/astro/ArrowLeft.astro";
import ArrowRightUp from "@/assets/icons/astro/ArrowRightUp.astro";

export type IconNameType = "arrow_right" | "arrow_left" | "arrow_right_up";

const AppIcons: Record<IconNameType, any> = {
  arrow_right: ArrowRight,
  arrow_left: ArrowLeft,
  arrow_right_up: ArrowRightUp,
};

export default AppIcons;
