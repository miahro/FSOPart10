import { useQuery } from "@apollo/client";
import { SIGNED_IN_USER } from "../graphql/queries";

const useMyReviews = () => {

  const { data } = useQuery(SIGNED_IN_USER, {
    variables: {
      includeReviews: true
    },

    }
    );

  const reviewNodes = data? data.me.reviews.edges.map((edge) => edge.node) : [];

  //console.log('useMyReviews returns data: ', reviewNodes);
  return {reviewNodes};
};

export default useMyReviews;