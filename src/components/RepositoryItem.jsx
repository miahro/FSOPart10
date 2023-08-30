import { View, Image, StyleSheet } from 'react-native';
import { formatThousands } from '../utils/formatThousands';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '5',
    backgroundColor: 'white'
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    marginLeft: 5,
  },
  imageContainer: {
    marginTop: -100,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    margingTop: 10,
    flex: 1
  },
  text: {
    marginTop: 5,
    marginBottom: 1,
  },
  blueBackground: {
    backgroundColor: 'blue',
    padding: 5,
    alignSelf: 'flex-start'
    },
  whiteText: {
    color: 'white',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subContainerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  statContainer: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  });

export const RepositoryItem = (props) => {
  //console.log(props.ownerAvatarUrl, typeof props.ownerAvatarUrl);
  return(
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <View style={styles.leftContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri:props.ownerAvatarUrl}}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText} testID='fullName'> {props.fullName}</Text>
          <Text style={styles.text} testID='description'> {props.description}</Text>
          <View style={styles.blueBackground}>
        <Text style={styles.whiteText} testID='language'> {props.language}</Text>
      </View>

      <View style={styles.rightContent}>
        <View style={styles.subContainerRow}>
          <View style={styles.statContainer}>
            <Text style={styles.boldText} testID='starCount'>{formatThousands(props.stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.boldText} testID='forkCount'>{formatThousands(props.forksCount)}</Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.boldText} testID='reviewCount'>{formatThousands(props.reviewCount)}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.boldText} testID='ratingAverage'>{formatThousands(props.ratingAverage)}</Text>
            <Text>Rating</Text>
            </View>
        </View>
      </View >
   </View>
  </View>
  </View>
  </View>
  );
};

export default RepositoryItem;


