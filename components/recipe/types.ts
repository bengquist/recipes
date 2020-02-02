export type RecipeWrapper = {
  recipe: Recipe;
};

export type Recipe = {
  image: string;
  calories: number;
  label: string;
  ingredients: Ingredient[];
  totalTime: number;
};

type Ingredient = {
  text: string;
  weight: number;
};
