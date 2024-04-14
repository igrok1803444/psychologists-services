import { SpecialistsListStyled } from "./SpecialistsList.styled";
import { ListItem } from "./list-item/ListItem";

export const SpecialistsList = ({ specialists }) => {
  return (
    <>
      <SpecialistsListStyled>
        {specialists.map((item) => {
          return <ListItem item={item} key={item.id} />;
        })}
      </SpecialistsListStyled>
    </>
  );
};
