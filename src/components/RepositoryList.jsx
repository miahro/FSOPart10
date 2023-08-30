import { FlatList, View, StyleSheet } from 'react-native';
//import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'grey',
  },
});

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
              keyExtractor={item => item.id}
              fullName={item.fullName}
              description={item.description}
              language={item.language}
              stargazersCount={item.stargazersCount}
              forksCount={item.forksCount}
              ratingAverage={item.ratingAverage}
              reviewCount={item.reviewCount}
              ownerAvatarUrl={item.ownerAvatarUrl}
            />
          }
      />
  );
        };

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
//  console.log(repositories);
//   const repositoryNodes = repositories
//     ? repositories.edges.map(edge => edge.node)
//     : [];
// //  console.log(repositories);
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;