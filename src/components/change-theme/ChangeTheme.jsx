import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { selecttheme } from "redux/theme/selectors";
import { setTheme } from "redux/theme/themeSlice";
import { theme } from "styles/themes";

const values = [
  {
    value: "green",
    label: "Green",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
];
export const Changetheme = () => {
  const dispatch = useDispatch();
  const themeName = useSelector(selecttheme);

  const filterStyles = {
    container: (baseStyles, state) => ({
      ...baseStyles,
      width: "226px",
      marginTop: "8px",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,

      width: "226px",
      backgroundColor: theme[themeName].colors.background.select,

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
      color: theme[themeName].colors.text.subColorText,

      ":hover": {
        color: theme[themeName].colors.text.subColorText,
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
      color: theme[themeName].colors.text.subColorText,
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
        ? theme[themeName].colors.text.select
        : theme[themeName].colors.text.inactiveSelect,

      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "125%",
      padding: "8px 18px",

      backgroundColor: "#fff",

      transitionDuration: theme[themeName].transition.duration,
      transitionTimingFunction: theme[themeName].transition.timingFunction,
      transitionProperty: "color",

      ":hover": {
        color: theme[themeName].colors.text.select,
        backgroundColor: "#fff",
        boxShadow: "none",
      },
    }),
  };

  return (
    <>
      <ReactSelect
        styles={filterStyles}
        options={values}
        menuShouldScrollIntoView={false}
        blurInputOnSelect={true}
        closeMenuOnSelect={true}
        defaultValue={
          values[values.findIndex((value) => value.value === themeName)]
        }
        isSearchable={false}
        isClearable={false}
        onChange={(event) => {
          if (event) {
            dispatch(setTheme(event.value));

            return;
          }
        }}
      />
    </>
  );
};
