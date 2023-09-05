import useMyReviews from "../hooks/useMyReviews";
import { FlatList } from "react-native";
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const MyReviewsList = () => {
  const {reviewNodes} = useMyReviews();

//  console.log('MyReviewsList', reviewNodes);

  return (
    <FlatList
    data={reviewNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) =>
      <ReviewItem
        review =  { item }
      />
    }
    />
  );
};

export default MyReviewsList;