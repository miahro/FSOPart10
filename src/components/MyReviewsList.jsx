import useMyReviews from "../hooks/useMyReviews";
import { FlatList, Pressable, View, StyleSheet, Alert } from "react-native";
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  separator: {
    height: 10,
    backgroundColor: 'grey',
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    width: 50,
    height: 50,
    borderStyle: "solid",
    borderRadius: 25,
    borderColor: "blue",
    borderWidth: 3,
    alignItems: "center",
    alignContent: "center",
  },
  ratingText: {
    marginTop: 12,
    color: 'blue',
  },
  buttonContainer: {
    flexdirection: 'row'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flex: 1
  },
  backgroundRed: {
    backgroundColor: theme.colors.error,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: theme.fonts.main
  },
});

const MyReviewsList = () => {
  const {reviewNodes} = useMyReviews();

    const navigate = useNavigate();



  const ReviewAction = ({ review }) => {

    const [deleteReview] = useDeleteReview();

    const handleView = () => {
      const id = review.repositoryId;
      navigate(`/repository/${id}`);
    };

    const handleDelete = () => {
      console.log('handleDelete called');
      Alert.alert('Delete review', 'Are you sure you want to delete this review', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => deleteReview(review.id)},
      ]);
    };

  return (
    <>
    <ReviewItem review={review} myreview={true}/>
    <View style={styles.bottomContainer}>
        <Pressable style={styles.button} onPress={handleView}>
          <View>
            <Text style={styles.buttonText} fontWeight="bold">View Repository</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.button, styles.backgroundRed]} onPress={handleDelete}>
          <View>
            <Text style={styles.buttonText} fontWeight="bold">Delete Review</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
  };


  return (
    <FlatList
    data={reviewNodes}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) =>
      <ReviewAction
        review =  { item } />
    }
    />
  );
};

export default MyReviewsList;