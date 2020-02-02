import * as React from "react";
import RecipeCard from "./RecipeCard";

type Props = {
  recipes: any[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => (
      <RecipeCard recipe={recipe} />
    ))}
  </ul>
);

export default RecipeList;
