import styled from "styled-components";
import desktopBg from "../img/desktop-background.png";
import mobileBg from "../img/mobile-background.png";

export const COLORS = {
  red: "#CC0000",
  primary: "#4f5d5b",
};

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${desktopBg});
  background-size: cover;
  flex-direction: row;
  display: flex;
  @media (max-width: 768px) {
    background-image: url(${mobileBg});
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const InnerContainer = styled.div`
  width: 55vw;
  @media (max-width: 768px) {
    width: 100vw;
    height: 55vh;
  }
`;

export const InnerContainer2 = styled.div`
  width: 45vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const TitleContainer = styled.div`
  margin: 1rem;
  height: 10vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleRightContainer = styled.div`
  margin: 1rem;
  margin-right: 2rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin: 0;
    margin-right: 1rem;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  width: 7rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const VImage = styled.img`
  width: 1.7rem;
  display: none;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: flex;
    filter: brightness(0.4);
  }
`;

export const VImageRight = styled.img`
  width: 1.2rem;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
  -webkit-filter: drop-shadow(3px 3px 3px #888888);
  filter: drop-shadow(3px 3px 3px #888888);
`;

export const RefreshImage = styled.img`
  width: 1.2rem;
  margin: 0;

  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 767px) {
    filter: brightness(0.4);
  }

  @media (max-width: 450px) {
    filter: brightness(100);
  }
`;

export const RefreshImageBottom = styled.img`
  width: 1.3rem;
  display: flex;
  margin: 2rem;
  position: absolute;
  top: 9rem;
  right: 0;
  -webkit-filter: drop-shadow(1px 1px 1px #888888);
  filter: drop-shadow(1px 1px 1px #888888);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentTitle = styled.p`
  margin: 1rem;
  font-size: 3.8rem;
  color: ${COLORS.primary};
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0rem;
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  @media (max-width: 768px) {
    margin-top: 0;
    top: 3rem;
  }
`;

export const ContentText = styled.p`
  margin: 1rem;
  font-size: 2rem;
  padding-right: 1rem;
  color: ${COLORS.primary};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContainerHorizontal = styled.div`
  display: flex;
  align-items: center;
`;

export const WordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  min-width: 70%;
  margin-top: 8rem;
  margin-left: 2rem;
  margin-right: 2rem;
  min-height: 8vh;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-wrap: wrap;
  -webkit-filter: drop-shadow(1px 1px 1px #888888);
  filter: drop-shadow(1px 1px 1px #888888);
  @media (max-width: 768px) {
    margin-top: 0;
    min-height: 7vh;
  }

  @media (max-width: 390px) {
    width: 50%;
    margin: 0;
    margin: auto;
    align-self: center;
  }
`;

export const GivenWords = styled.div`
  margin-top: 1.5vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Word = styled.div`
  border-radius: 0.5rem;
  min-width: 1rem;
  padding: 0.5rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  margin: 0.5rem;
  background-color: #fff;
  -webkit-filter: drop-shadow(1px 1px 1px #888888);
  filter: drop-shadow(1px 1px 1px #888888);
`;

export const WordGiven = styled.p`
  font-size: 1.3rem;
  line-height: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AMOUNT_LIVES_LOST = 1;
export const TOTAL_LIVES = 5;
export const GIVEN_WORDS = ["teeth.", "brush", "my", "I"];
