import { ConditionsLI, ConditionsListStyled } from "./ConditionsList.styled";

export const ConditionsList = ({ listInfo }) => {
  const { initial_consultation, experience, license, specialization } =
    listInfo;

  return (
    <ConditionsListStyled>
      <ConditionsLI>
        Experience: <span>{experience}</span>
      </ConditionsLI>
      <ConditionsLI>
        License: <span>{license}</span>
      </ConditionsLI>

      <ConditionsLI>
        Specialization: <span>{specialization}</span>
      </ConditionsLI>
      <ConditionsLI>
        Initial_consultation: <span>{initial_consultation}</span>
      </ConditionsLI>
    </ConditionsListStyled>
  );
};
