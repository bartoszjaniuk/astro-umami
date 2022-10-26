import styled, { css } from "styled-components";

const Side = styled.div`
  font-size: 2rem;
  height: 510px;
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(var(--c-black), 0.15);
`;

const FrontSide = styled(Side)`
  background-color: var(--c-white);
`;

const BackSide = styled(Side)<{
  gradientColor1: string;
  gradientColor2: string;
}>(
  ({ gradientColor1, gradientColor2 }) => css`
    transform: rotateY(180deg);
    background-image: linear-gradient(
      to right,
      ${gradientColor1},
      ${gradientColor2}
    );
  `
);

const Card = styled.div`
  position: relative;
  perspective: 150rem;
  -moz-perspective: 150rem;
  height: 510px;
  width: 340px;
  &:hover {
    ${FrontSide} {
      transform: rotateY(-180deg);
    }

    ${BackSide} {
      transform: rotateY(0);
    }
  }
`;

const CardPicture = styled.div<{
  gradientColor1: string;
  gradientColor2: string;
  backgroundUrl: string;
}>(
  ({ gradientColor1, gradientColor2, backgroundUrl }) => css`
    background-size: cover;
    height: 13rem;
    background-blend-mode: screen;
    background-image: linear-gradient(
        to right,
        ${gradientColor1},
        ${gradientColor2}
      ),
      url(${backgroundUrl});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  `
);

const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: #57463c;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const HeadingSpan = styled.div<{
  gradientColor1: string;
  gradientColor2: string;
}>(
  ({ gradientColor1, gradientColor2 }) => css`
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 255, 0.85),
      rgba(128, 0, 128, 0.85)
    );
  `
);

const CardDetails = styled.div`
  padding: 0 3rem;
`;

const DetailsList = styled.ul`
  list-style: none;
  width: 100%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid var(--c-gray);
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
`;

const PriceContainer = styled.div`
  text-align: center;
  color: var(c--primary);
  margin-bottom: 8rem;
`;

const PriceHeading = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const PriceValue = styled.div`
  font-size: 6rem;
  font-weight: 100;
`;

export const Styled = {
  Card,
  FrontSide,
  BackSide,
  CardPicture,
  CardHeading,
  HeadingSpan,
  CardDetails,
  DetailsList,
  ListItem,
  Content,
  PriceContainer,
  PriceHeading,
  PriceValue,
};
