/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowRight from "@/assets/icons/astro/ArrowRight.astro";
import ArrowLeft from "@/assets/icons/astro/ArrowLeft.astro";
import ArrowRightUp from "@/assets/icons/astro/ArrowRightUp.astro";
import MapTrifold from "@/assets/icons/astro/MapTrifold.astro";
import Download from "@/assets/icons/astro/Download.astro";
import Play from "@/assets/icons/astro/Play.astro";

export type IconNameType =
  | "arrow_right"
  | "arrow_left"
  | "arrow_right_up"
  | "map_trifold"
  | "download"
  | "play";

const AppIcons: Record<IconNameType, any> = {
  arrow_right: ArrowRight,
  arrow_left: ArrowLeft,
  arrow_right_up: ArrowRightUp,
  map_trifold: MapTrifold,
  download: Download,
  play: Play,
};

export default AppIcons;
