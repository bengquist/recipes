import * as React from "react";

type Props = {
  recipe: any;
};

const RecipeCard: React.FunctionComponent<Props> = ({ recipe }) => (
  <div>{recipe.label}</div>
);

export default RecipeCard;
