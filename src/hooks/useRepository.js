import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  console.log("useRepository called with id: ", id, "typeof which", typeof id);

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      id,
      fetchPolicy: "cache-and-network",
    },
  });

  console.log("data: ", data);
  // console.log("error: ", error);
  // console.log("loading: ", loading);

  return { data, error, loading };
};

export default useRepository;
