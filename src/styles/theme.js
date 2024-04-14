export const themeGreen = {
  colors: {
    background: {
      navLink: "#54be96",
      navLinkActivePointer: "#54be96",
      button: "#fbfbfb",
      buttonAction: "#54be96",
      buttonHover: "#36a379",
      headerSection: "#fbfbfb",
      select: "#54be96",
      overlay: "rgba(25, 26, 21, 0.6)",
      conditionsLI: "#f3f3f3",
      spiner: "#3470ff",
      userIcon: "#54be96",
      specialistLabel: "#54be96",
      specialistIconContainer: "#fbfbfb",
      contactsContainer: "#FBC75E",
      questionLabel: " #4535af",
      comentatorPhoto: "rgba(84, 190, 150, 0.2)",
    },
    text: {
      mainTitle: "#191a15",
      infoText: "#191a15",
      subInfoText: "#8a8a89",
      logoText: "#191a15",
      subColorText: "#FBFBFB",
      navLink: "#191a15",
      navLinkActive: "#fbfbfb",
      button: "#191a15",
      buttonAction: "#fbfbfb",
      subHeadings: "#191a15",
      inputText: "#191a15",
      description: "rgba(25, 26, 21, 0.5)",
      loadMore: "#3470ff",
      loadMoreHover: "#0b44cd",
      select: "#191a15",
      inactiveSelect: "rgba(25, 26, 21, 0.3)",
      inputLabel: "#8a8a89",
      actionText: "#54be96",
      priceActionText: "#38cd3e",
      conditionText: "#191a15",
      informationList: "rgba(18, 20, 23, 0.5)",
      noResultText: "#121417",
      comentatorFirstLetter: "#54be96",
    },
    border: {
      navLink: "#3470ff",
      input: "#54be96",
      profilePhoto: "rgba(84, 190, 150, 0.2)",
    },
    icons: {
      favoriteInactive: "#191A15",
      favoriteActive: "#54BE96",
      specialistIcon: "#54be96",
      contactsIcon: "#fbfbfb",
      questionIcon: "#fbfbfb",
      rating: "#ffc531",
    },
  },
  gradients: {
    heroGradient:
      "radial-gradient(circle at 100% 100%,rgba(84, 190, 150, 0.1) 0%,rgba(84, 190, 150, 0) 70%)",
  },
  transition: {
    duration: "500ms",
    timingFunction: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  },
};

let theme = {};

export const setTheme = (themeName = "green") => {
  switch (themeName) {
    case "green":
      theme = themeGreen;
      break;

    default:
      break;
  }
};

export { theme };
