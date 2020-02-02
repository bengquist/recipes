import { gql } from "apollo-boost";

const RECIPES_QUERY = gql`
  query getRecipes($query: String!) {
    recipes(query: $query) {
      items {
        recipe {
          label
          ingredients {
            text
            weight
          }
        }
      }
    }
  }
`;

export default RECIPES_QUERY;
