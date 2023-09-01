import { View, Image, StyleSheet, FlatList } from 'react-native';
import { formatThousands } from '../utils/formatThousands';
import Text from './Text';
import Button from './Button';
import * as Linking from 'expo-linking';
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
    flexGrow: 1,
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


const ItemSeparator = () => <View style={styles.separator} />;

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {formatThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryInfo = ({repository}) => {

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {repository.fullName}
          </Text>
          <Text color="textSecondary" alignContent='left'>
            {repository.description}
          </Text>
          {repository.language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{repository.language}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <CountItem count={repository.stargazersCount} label="Stars" />
        <CountItem count={repository.forksCount} label="Forks" />
        <CountItem count={repository.reviewCount} label="Reviews" />
        <CountItem count={repository.ratingAverage} label="Rating" />
      </View>
      {repository.url &&
        <Button onPress={()=>Linking.openURL(repository.url)}>Open in Github</Button>
      }
    </View>
  );

};

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

const RepositoryItem = ({ repository }) => {



  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];


  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};


export default RepositoryItem;


