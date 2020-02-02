import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import RecipeList from "../components/recipe/RecipeList";
import { useQuery } from "@apollo/react-hooks";
import RECIPES_QUERY from "../graphql/recipes.query";

const IndexPage: NextPage = () => {
  const [query, setQuery] = React.useState("");
  const { data, loading, error } = useQuery(RECIPES_QUERY, {
    variables: { query: "chocolate chip" }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Layout title="Search Recipes">
      <h1>Search for a recipe!</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
      />
      <RecipeList recipes={data.recipes.items} />
    </Layout>
  );
};

export default IndexPage;
