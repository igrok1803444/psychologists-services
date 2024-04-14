import styled from "styled-components";
import { theme } from "styles/theme";

export const filterStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    width: "226px",
    marginTop: "8px",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,

    width: "226px",
    backgroundColor: theme.colors.background.select,

    boxShadow: "none",
    border: "none",
    borderRadius: "14px",

    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    padding: "14px",
    rotate: state.isFocused ? "180deg" : "0",
    color: theme.colors.text.subColorText,

    ":hover": {
      color: theme.colors.text.subColorText,
    },
  }),

  valueContainer: (baseStyles, state) => ({
    ...baseStyles,

    padding: "14px 0 14px 18px",
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,

    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "125%",
    color: theme.colors.text.subColorText,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: "4px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    width: "226px",
    height: "max-content",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07);",
    background: "#fff",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    height: "100%",
  }),
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    color: isSelected
      ? theme.colors.text.select
      : theme.colors.text.inactiveSelect,

    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "125%",
    padding: "8px 18px",

    backgroundColor: "#fff",

    transitionDuration: theme.transition.duration,
    transitionTimingFunction: theme.transition.timingFunction,
    transitionProperty: "color",

    ":hover": {
      color: theme.colors.text.select,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  }),
};

export const FilterWrapper = styled.p`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;
