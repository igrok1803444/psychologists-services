import { themeGreen } from "styles/theme";

export const ModalStyles = {
  overlay: {
    zIndex: 100,
    backgroundColor: themeGreen.colors.background.overlay,
    overflowY: "scroll",

    transitionProperty: "opacity",
    transitionDuration: themeGreen.transition.duration,
    transitionTimingFunction: themeGreen.transition.timingFunction,
  },
  content: {
    maxWidth: "565px",
    maxHeight: "max-content",

    width: "max-content",

    margin: "0 auto",

    padding: "0",

    borderRadius: "30px",
  },
};
