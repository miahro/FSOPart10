import  Constants  from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import  RepositoryList  from './RepositoryList';
import { AppBar } from './AppBar';
import { SignIn } from './SignIn';
import  CreateReview  from './CreateReview';
import  RepositoryView  from './RepositoryView';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
    flexDirection: 'margin',
  },
});

const Main = () => {
  return (
    <View style={styles.container} >
      <AppBar titleText={'Repositories'}></AppBar>
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='signin' element={<SignIn />} exact />
        <Route path='*' element={<Navigate to='/'/>} replace />
        <Route path='/repository/:id' element={<RepositoryView />} />
        <Route path='createreview' element={<CreateReview />} />
      </Routes>
    </View>
  );
};

export default Main;