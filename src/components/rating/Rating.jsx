import { RatingContainer, RatingIcon, RatingText } from "./Rating.styled";

export const Rating = ({ children }) => {
  return (
    <RatingContainer>
      <RatingIcon />
      <RatingText>{children}</RatingText>
    </RatingContainer>
  );
};
