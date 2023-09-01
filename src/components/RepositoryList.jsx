import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'grey',
  },
  pickerContainer: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'gray'
  }
});

const SortByMenu = ( {setSortBy} ) => {

  return (
    <>
  <Picker
    style={styles.pickerContainer}
    onValueChange={(value) => setSortBy(value)
  }>
    <Picker.Item label="Latest repositiories" value="latest" />
    <Picker.Item label="Highest rated repositories" value="highestRate" />
    <Picker.Item label="Lowest rated reposititories" value="lowestRate" />
  </Picker>
  </>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];



    return (
      <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({item}) =>
            <RepositoryItem
              repository =  { item }
            />
          }
      />
  );
        };

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest');
  const { repositories } = useRepositories(sortBy);
  console.log('sortBy', sortBy);
  console.log('in RepositoryList component repositories', repositories);
  return (
    <>
      <SortByMenu setSortBy={setSortBy} />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;