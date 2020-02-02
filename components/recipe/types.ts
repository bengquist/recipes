export type RecipeWrapper = {
  recipe: Recipe;
};

export type Recipe = {
  image: string;
  calories: number;
  label: string;
  ingredients: Ingredient[];
};

type Ingredient = {
  text: string;
  weight: number;
};
