import type { TargetAndTransition, Variants } from "framer-motion";

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const gentleHover: TargetAndTransition = {
  y: -4,
  transition: {
    duration: 0.22,
    ease: [0, 0, 0.2, 1],
  },
};
