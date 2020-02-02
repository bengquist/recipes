import * as React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { RecipeWrapper } from "./types";

type Props = {
  recipes: RecipeWrapper[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <Container>
    {recipes.map(({ recipe }) => (
      <RecipeCard key={recipe.label} recipe={recipe} />
    ))}
  </Container>
);

export default RecipeList;

const Container = styled.div`
  display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;
