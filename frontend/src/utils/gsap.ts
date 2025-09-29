import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const gsapScrollTrigger = gsap.registerPlugin(ScrollTrigger);
export const gsapTimeline = gsap.timeline();

export default gsap;
