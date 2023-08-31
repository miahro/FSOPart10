import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";

const RepositoryView = () => {
  const { id } = useParams();
  console.log('RepositoryView with id: ', id);



  const { data } = useRepository( id );
//  console.log('repository return data', data);
//  console.log('data.repository ', data?.repository);
  const repository = data? data.repository : undefined;
//  console.log('repository:', repository);

  return (
    <>
    {repository &&
    <RepositoryItem
              fullName={repository.fullName}
              description={repository.description}
              language={repository.language}
              stargazersCount={repository.stargazersCount}
              forksCount={repository.forksCount}
              ratingAverage={repository.ratingAverage}
              reviewCount={repository.reviewCount}
              ownerAvatarUrl={repository.ownerAvatarUrl}
              gitLink={repository.url}
    />
    }
    </>
  );
};

export default RepositoryView;