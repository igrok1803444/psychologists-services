import { useDispatch, useSelector } from "react-redux";
import { checkFavorite } from "features";
import {
  addToFavorite,
  removeFromFavorite,
} from "redux/favorite/favoriteSlice";
import { openModal } from "redux/modal/modalSlice";
import {
  CardHeader,
  CardInfoWrapper,
  Circle,
  Icon,
  IconButton,
  LI,
  PriceActionText,
  PriceContainer,
  PriceText,
  ProfilePhoto,
  ProfilePhotoWrapper,
  RatingAndPriceContainer,
  ReadMore,
  RegisterConsultationText,
  SpecialistDesc,
  SpecialistName,
  SpecialistProffesionText,
} from "./ListItem.styled";

import { Button } from "components/button/Button";
import { selectFavoriteList } from "redux/favorite/selectors";
import { selectUser } from "redux/auth/selectors";
import { ConditionsList } from "components/conditions-list/ConditionsList";
import { useState } from "react";
import { CommentsList } from "components/comments-list/CommentsList";
import { Rating } from "components/rating/Rating";

export const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { avatar_url, name, rating, price_per_hour, about, reviews } = item;
  const favoriteList = useSelector(selectFavoriteList);
  const user = useSelector(selectUser);

  const [showComments, setShowComments] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(openModal(item));
  };

  const isFavorite = checkFavorite(item, favoriteList, user.id);

  const handleFavorite = (event) => {
    event.preventDefault();

    if (event.target.className.includes("favorite")) {
      dispatch(removeFromFavorite({ item, userId: user.id }));
      return event.target.classList.remove("favorite");
    }
    dispatch(addToFavorite({ ...item, owner: user.id }));
    event.target.classList.add("favorite");
  };

  return (
    <LI>
      <div>
        <ProfilePhotoWrapper>
          <ProfilePhoto
            loading="lazy"
            src={avatar_url}
            alt={name}
            width={96}
            height={96}
          />
          <Circle />
        </ProfilePhotoWrapper>
      </div>
      <CardInfoWrapper>
        <CardHeader>
          <div>
            <SpecialistProffesionText>Psychologist</SpecialistProffesionText>
            <SpecialistName>{name}</SpecialistName>
          </div>
          <RatingAndPriceContainer>
            <Rating>Rating: {rating}</Rating>
            <PriceContainer>
              <PriceText>
                Price / hour:{" "}
                <PriceActionText>{price_per_hour}$</PriceActionText>
              </PriceText>
            </PriceContainer>
            <IconButton
              type="button"
              className={isFavorite}
              onClick={handleFavorite}
            >
              <Icon className={isFavorite} />
            </IconButton>
          </RatingAndPriceContainer>
        </CardHeader>
        <ConditionsList listInfo={item}></ConditionsList>
        <SpecialistDesc>{about}</SpecialistDesc>
        {!showComments ? (
          <ReadMore
            type="button"
            onClick={() => {
              setShowComments(true);
            }}
          >
            Read more
          </ReadMore>
        ) : (
          <>
            <CommentsList dataArray={reviews} />
            <Button
              style={{ maxWidth: "max-content" }}
              onClick={handleClick}
              className={"action"}
            >
              <RegisterConsultationText>
                Make an appointment
              </RegisterConsultationText>
            </Button>
          </>
        )}
      </CardInfoWrapper>
    </LI>
  );
};
