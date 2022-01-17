import React from "react";
import { useState } from "react";
import "./Home.css";
import styled from "styled-components";
import nominisImg from "../img/nominis.png";
import heart from "../img/heart.png";
import heartOutline from "../img/heart-outline.png";
import avatar from "../img/avatar.jpg";
import refresh from "../img/refresh.png";
import volume from "../img/volume.png";
import volumeOff from "../img/volume-off.png";
import * as C from "../utils/constants";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [givenWordsBoolean, setgivenWordsBoolean] = useState(
    new Array(C.GIVEN_WORDS.length).fill(false)
  );

  const addWord = (i) => {
    let auxSelectedWords = selectedWords.slice();
    auxSelectedWords.push(C.GIVEN_WORDS[i]);
    setSelectedWords(auxSelectedWords);

    let auxGivenWordsBoolean = givenWordsBoolean.slice();
    auxGivenWordsBoolean[i] = true;
    setgivenWordsBoolean(auxGivenWordsBoolean);
  };

  const removeWord = (word, index) => {
    let auxSelectedWords = selectedWords.slice();
    auxSelectedWords.splice(index, 1);
    setSelectedWords(auxSelectedWords);

    let auxGivenWordsBoolean = givenWordsBoolean.slice();
    auxGivenWordsBoolean[C.GIVEN_WORDS.indexOf(word)] = false;
    setgivenWordsBoolean(auxGivenWordsBoolean);
  };

  const restartExercise = () => {
    setSelectedWords([]);
    setgivenWordsBoolean(new Array(C.GIVEN_WORDS.length).fill(false));
  };

  return (
    <C.Container>
      <C.InnerContainer>
        <C.TitleContainer>
          <div>
            <C.TextContainer>
              <p
                style={{ color: C.COLORS.red }}
                className="poppins-medium title-red"
              >
                Story Title
              </p>
              <p
                style={{ color: C.COLORS.red }}
                className="poppins-light subtitle-red"
              >
                Episode 1
              </p>
            </C.TextContainer>
            <C.LogoContainer>
              <img alt="nominis-log" src={nominisImg} className="logo" />
            </C.LogoContainer>
          </div>

          <C.ContainerHorizontal>
            <div className="lives-container">
              {new Array(C.TOTAL_LIVES).fill("0").map((item, index) => {
                return (
                  <img
                    alt="heart"
                    className="heart"
                    key={index}
                    src={
                      C.AMOUNT_LIVES_LOST - 1 === index ? heartOutline : heart
                    }
                  />
                );
              })}
              <C.AvatarContainer>
                <img alt="avatar" src={avatar} className="avatar"></img>
              </C.AvatarContainer>
              <C.VImage
                alt="volume"
                onClick={() => setIsMuted(!isMuted)}
                className="volume"
                src={isMuted ? volumeOff : volume}
              ></C.VImage>
            </div>
          </C.ContainerHorizontal>
        </C.TitleContainer>
        <C.Content>
          <C.ContentTitle className="poppins-medium">
            Let's practice
          </C.ContentTitle>
          <C.ContentText className="poppins-light">
            Put the words in order to make a correct sentence.
          </C.ContentText>
        </C.Content>
      </C.InnerContainer>
      <C.InnerContainer2>
        <C.TitleRightContainer>
          <C.VImageRight
            onClick={() => setIsMuted(!isMuted)}
            alt="vimage2"
            src={isMuted ? volumeOff : volume}
          />
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={() => restartExercise()}
          >
            <C.RefreshImage alt="refresh" src={refresh} />
          </button>
        </C.TitleRightContainer>

        <div>
          <C.RefreshImageBottom
            alt="refresh2"
            src={refresh}
            onClick={() => restartExercise()}
          />
          <C.WordsContainer>
            {selectedWords.length > 0
              ? selectedWords.map((item, index) => {
                  return (
                    <p
                      id="selected-w"
                      key={index}
                      onClick={() => removeWord(item, index)}
                      className="word poppins-regular"
                      style={{ color: C.COLORS.primary }}
                    >
                      {item}
                    </p>
                  );
                })
              : null}
          </C.WordsContainer>

          <C.GivenWords>
            {C.GIVEN_WORDS.map((item, index) => {
              return (
                <C.Word
                  onClick={() => {
                    if (givenWordsBoolean[index] === false) {
                      addWord(index);
                    }
                  }}
                  className="word poppins-regular"
                  key={index}
                >
                  <C.WordGiven
                    style={{
                      opacity: givenWordsBoolean[index] ? 0.4 : 1,
                      color: C.COLORS.primary,
                    }}
                  >
                    {item}
                  </C.WordGiven>
                </C.Word>
              );
            })}
          </C.GivenWords>
        </div>
      </C.InnerContainer2>
    </C.Container>
  );
}
