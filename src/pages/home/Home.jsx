import { ActionText } from "styles/ActionText";

import {
  ArrowIcon,
  HeroImg,
  HeroText,
  HeroWrapper,
  HomeContainer,
  ImageWrapper,
  MainTitle,
  MainTitleWrapper,
  NavLink,
  NavLinkHeroText,
} from "./Home.styled";
import { ContactsLabel } from "components/contacts-label/ContactsLabel";
import { QuestionLabel } from "components/question-label/QuestionLabel";
import { SpecialistCount } from "components/specialist-count/SpecialistCount";

export const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <HeroWrapper>
          <MainTitleWrapper>
            <MainTitle>
              The road to the{" "}
              <ActionText style={{ fontStyle: "italic" }}>depths</ActionText> of
              the human soul
            </MainTitle>
            <HeroText>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </HeroText>
            <NavLink to={"psychologists"}>
              <NavLinkHeroText>Get Started</NavLinkHeroText>
              <ArrowIcon />
            </NavLink>
          </MainTitleWrapper>
          <ImageWrapper>
            <HeroImg
              srcset="./images/hero.png 1x, ./images/hero@2x.png 2x"
              src="photo.jpg"
              alt="The girl is a psychologist with red hair."
            />
            <SpecialistCount />
            <QuestionLabel />
            <ContactsLabel />
          </ImageWrapper>
        </HeroWrapper>
      </div>
    </HomeContainer>
  );
};
