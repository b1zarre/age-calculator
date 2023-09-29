import { animate } from 'framer-motion';

export const animateValues = (
  ref: React.RefObject<HTMLSpanElement>,
  val?: number,
) =>
  animate(0, val, {
    duration: 0.5,
    onUpdate(value) {
      if (ref.current && value) {
        ref.current.textContent = value.toFixed(0);
      }
    },
  });
