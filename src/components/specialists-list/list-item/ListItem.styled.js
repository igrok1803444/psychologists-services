import { FaCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import styled from "styled-components";

export const LI = styled.li`
  position: relative;
  width: 100%;

  display: flex;
  column-gap: 24px;

  padding: 24px;

  @media screen and (max-width: 475px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ProfilePhotoWrapper = styled.div`
  position: relative;

  padding: 12px;

  border: 2px solid ${({ theme }) => theme.colors.border.profilePhoto};
  border-radius: 30px;
`;

export const ProfilePhoto = styled.img`
  display: block;

  border-radius: 15px;
`;

export const Circle = styled(FaCircle)`
  position: absolute;

  top: 8px;
  right: 8px;

  fill: #38cd3e;

  border: 3px solid #fbfbfb;
  border-radius: 100%;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`;

export const SpecialistProffesionText = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;

export const SpecialistName = styled.h2`
  margin-top: 8px;

  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.text.infoText};
`;

export const RatingAndPriceContainer = styled.div`
  display: flex;
  align-items: start;
`;

export const PriceContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-left: 32px;

  &::before {
    position: absolute;
    top: 0;
    left: -16px;

    content: "";

    height: 100%;
    width: 1px;

    background-color: rgba(25, 26, 21, 0.2);
  }
`;

export const PriceText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.infoText};
`;

export const PriceActionText = styled.span`
  color: ${({ theme }) => theme.colors.text.priceActionText};
`;

export const IconButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  margin: 0;
  margin-left: 28px;

  background-color: inherit;
  border: none;

  color: ${({ theme }) => theme.colors.icons.favoriteInactive};

  &.favorite {
    color: ${({ theme }) => theme.colors.icons.favoriteActive};
  }
`;
export const Icon = styled(IoMdHeart)`
  pointer-events: none;

  fill: none;

  stroke: ${({ theme }) => theme.colors.icons.favoriteInactive};
  stroke-width: 30;
  stroke-miterlimit: 4;
  stroke-opacity: 1;
  stroke-linecap: round;
  stroke-linejoin: round;

  width: 26px;
  height: 26px;
  transition-property: fill, stroke;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.favorite {
    fill: ${({ theme }) => theme.colors.icons.favoriteActive};
    stroke: ${({ theme }) => theme.colors.icons.favoriteActive};
  }
`;

export const SpecialistDesc = styled.p`
  margin-top: 24px;

  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.description};
`;

export const ReadMore = styled.button`
  cursor: pointer;

  margin-top: 14px;

  padding: 0;

  background-color: inherit;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${({ theme }) => theme.colors.text.infoText};
`;

export const RegisterConsultationText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
`;
