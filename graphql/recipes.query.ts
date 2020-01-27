import { gql } from "apollo-boost";

const JOBS_QUERY = gql`
  query Jobs {
    jobs {
      id
      title
    }
  }
`;

export default JOBS_QUERY;
