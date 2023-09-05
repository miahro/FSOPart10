import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import TextInput from './TextInput';
import theme from '../theme';
import { Icon } from 'react-native-elements';

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
    backgroundColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  inputField: {
    fontSize: 20,
    padding: 20,
    fontFamily: theme.fonts.main,
    flex: 1,
  },
});

const FilterInput = ({ handleFilter, delay }) => {

  let timer = null;

  const handleFilterChange = (fltInput) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleFilter(fltInput);
    }, delay);
  };

  return (
    <View style={styles.inputContainer}>
      <Icon style={styles.inputField} name='search' />
      <TextInput style={styles.inputField} onChangeText={handleFilterChange} placeholder='Filter' />
    </View>
  );
};


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
  const [filter, setFilter] = useState('');
  const { repositories } = useRepositories(sortBy, filter);
  console.log('sortBy', sortBy);
  console.log('in RepositoryList component repositories', repositories);

  const handleFilter = ( value ) => {
    setFilter(value);
  };

  return (
    <>
      <FilterInput handleFilter={handleFilter} delay={500}/>
      <SortByMenu setSortBy={setSortBy} />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;