import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    //console.log(ownerName, rating, repositoryName, text);
    const { data } = await mutate({
      variables: {
        "review": {
          "ownerName": ownerName,
          "repositoryName": repositoryName,
          "rating": parseInt(rating),
          "text": text,
        },
      },
    });

    return data;
  };
  return [createReview, result];
};

export default useReview;
