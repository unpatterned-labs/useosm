// Import icons dynamically based on name
import ArrowRight from "@/assets/icons/astro/ArrowRight.astro";
import ArrowLeft from "@/assets/icons//astro/ArrowLeft.astro";

export type IconNameType = "arrow_right" | "arrow_left";

const AppIcons: Record<IconNameType, any> = {
  arrow_right: ArrowRight,
  arrow_left: ArrowLeft
};

export default AppIcons;
