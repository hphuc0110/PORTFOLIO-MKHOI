export const TRANSITION_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -100 },
};

export const TRANSITION_RIGHT = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
};

export const TRANSITION_UP = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 },
};

export const TRANSITION_DOWN = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

export const STAGGER = {
  visible: {
    transition: {
      staggerChildren: 0.5, // Adjust to control stagger timing
    },
  },
  hidden: {},
};

export const TRANSITION_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

export const TRANSITION_FADE = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};
