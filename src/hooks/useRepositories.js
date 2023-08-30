import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  //console.log(GET_REPOSITORIES);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: [],
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {
    //console.log("fetchRepositories called");
    if (data) {
      //console.log("data found from fetchRepositories, data:", data);
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

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
