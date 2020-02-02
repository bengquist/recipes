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
        <p>recipe</p>
      </Info>
    </Container>
  );
};

export default RecipeCard;

const Container = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  :hover {
    #info {
      max-height: 1000px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  transition: 0.8s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: white;
  max-height: 0;
  overflow: hidden;

  h1 {
    text-align: center;
    font-size: 20px;
  }
`;
