import React from "react";
// import styles from "./FloatingCard.styles.module.scss";
import { Styled } from "./FloatingCard.styles";

// import { Button } from "./../button/Button";

export const FloatingCard = () => {
  const title = "Title";
  const backgroundUrl =
    "https://v.wpimg.pl/MWZiLmpwYjY7CzpeXwxvI3hTbgQZVWF1L0t2T19Gf29qEWMAXhwiOjUbJwIdFiM-O0c8AV8EPTYoHS0OBQRgOzUOI0AeEjp6PAh5VEkRdGduWX0LElknJz1LMQ";

  const gradientColor1 = "blue";
  const gradientColor2 = "purple";

  return (
    <Styled.Card>
      <Styled.FrontSide>
        <Styled.CardPicture
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
          backgroundUrl={backgroundUrl}
        />
        <Styled.CardHeading>
          <Styled.HeadingSpan
            gradientColor1={gradientColor1}
            gradientColor2={gradientColor2}
          >
            {title}
          </Styled.HeadingSpan>
        </Styled.CardHeading>
        <Styled.CardDetails>
          <Styled.DetailsList>
            <Styled.ListItem>1</Styled.ListItem>
            <Styled.ListItem>2</Styled.ListItem>
            <Styled.ListItem>3</Styled.ListItem>
            <Styled.ListItem>4</Styled.ListItem>
          </Styled.DetailsList>
        </Styled.CardDetails>
      </Styled.FrontSide>
      <Styled.BackSide
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
      >
        <Styled.Content>
          <Styled.PriceContainer>
            <Styled.PriceHeading>Teraz tylko</Styled.PriceHeading>
            <Styled.PriceValue>100 zł</Styled.PriceValue>
          </Styled.PriceContainer>
        </Styled.Content>
      </Styled.BackSide>
    </Styled.Card>
  );
};
