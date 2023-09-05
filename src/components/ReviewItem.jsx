import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import formatDate from '../utils/formatDate';

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
  }
});

const ReviewItem = ( {review} ) => {
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.nameText} fontWeight='bold'>{review.user.username}</Text>
          <Text style={styles.descriptionText} color='textSecondary'>{formatDate(review.createdAt)}</Text>
          <Text style={styles.descriptionText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );

};

export default ReviewItem;