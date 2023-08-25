import  Constants  from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'gray'
  },
});

const Main = () => {
  return (
    <View style={styles.container} >
      <AppBar titleText={'Repositories'}></AppBar>
      <RepositoryList />
      </View>
  )
};

export default Main;