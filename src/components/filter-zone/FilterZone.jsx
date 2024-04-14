import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import ReactSelect from "react-select";
import { FilterWrapper, filterStyles } from "./FilterZone.styled";
import { onValue, ref } from "firebase/database";
import { DB } from "firabase";
import { setSpecialists } from "redux/specialists/specialistsSlice";

const options = [
  { label: "A to Z", value: "A-to-Z" },
  { label: "Z to A", value: "Z-to-A" },
  { label: "Less than 10$", value: "less-10" },
  { label: "Greater than 10$", value: "more-10" },
  { label: "Popular", value: "popular" },
  { label: "Not popular", value: "unpopular" },
  { label: "Show all", value: "all" },
];

export const FilterZone = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    switch (filter) {
      case "A-to-Z":
        break;
      case "Z-to-A":
        break;
      case "less-10":
        break;
      case "more-10":
        break;
      case "popular":
        break;
      case "unpopular":
        break;

      default:
        const dbRef = ref(DB);

        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch(setSpecialists(data));
          }
        });

        break;
    }
  }, [filter, dispatch]);

  return (
    <section>
      <FilterWrapper>Filters</FilterWrapper>
      <ReactSelect
        styles={filterStyles}
        options={options}
        menuShouldScrollIntoView={false}
        blurInputOnSelect={true}
        closeMenuOnSelect={true}
        defaultValue={options[0]}
        isSearchable={false}
        isClearable={false}
        name="filter"
        onChange={(event) => {
          if (!event) {
            setFilter("all");

            return;
          }
          setFilter(event.value);
        }}
      />
    </section>
  );
};
