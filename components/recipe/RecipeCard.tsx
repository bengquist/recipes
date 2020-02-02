import * as React from "react";
import styled from "styled-components";
import { Recipe } from "./types";

type Props = {
  recipe: Recipe;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  console.log(recipe);

  return (
    <Container>
      <Image src={recipe.image} />
      <Info id="info">
        <h1>{recipe.label}</h1>
        <p>Time to cook: {recipe.totalTime}</p>
        <p>Calories: {Math.floor(recipe.calories)}</p>
      </Info>
    </Container>
  );
};

export default RecipeCard;

const Container = styled.div`
  height: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    #info {
      max-height: 1000px;
      color: black;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  transition: max-height 0.7s ease-in, color 0.7s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: white;
  color: rgba(0, 0, 0, 0);
  max-height: 0;
  overflow: hidden;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);

  h1 {
    text-align: center;
    font-size: 20px;
  }
`;
