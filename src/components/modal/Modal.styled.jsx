import { themeGreen } from "styles/theme";

export const ModalStyles = {
  overlay: {
    zIndex: 100,
    backgroundColor: themeGreen.colors.background.overlay,

    transitionProperty: "opacity",
    transitionDuration: themeGreen.transition.duration,
    transitionTimingFunction: themeGreen.transition.timingFunction,
  },
  content: {
    maxWidth: "541px",
    margin: "0 auto",

    padding: "0",

    borderRadius: "24px",
  },
};
