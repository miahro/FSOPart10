import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy, filter) => {
  const [repositories, setRepositories] = useState();
  let variables = {};
  console.log('in useRepositories filter: ', filter, 'typeof', typeof filter);

  switch(sortBy) {
    case "latest":
      variables = {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
        filter: filter
      };
      break;
    case "highestRate":
      variables  = {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
        filter: filter
      };
      break;
    case "lowestRate":
        variables  = {
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
          filter: filter
        };
      break;
    }

  console.log('variables: ',variables);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {

    if (data) {
      console.log("data found from fetchRepositories, data:", data);
      setRepositories(data.repositories);
    } else {
      console.log('no data from fetchRepositories');
      console.log('loading', loading);
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (data) {
      fetchRepositories();
    }
  }, [data]);

  console.log('in useRepositories sorting', sortBy);
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
