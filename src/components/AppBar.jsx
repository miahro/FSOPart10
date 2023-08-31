import { StyleSheet, Text, Pressable, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import { Link  } from 'react-router-native';
import { theme } from '../theme';
import { SIGNED_IN_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import AuthStorageContext  from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#24292e',
    padding: 12,
    minHeight: 120,
    maxHeight: 120,
    color: 'white',
  },
  appBarText: {
    color: 'white',
    fontSize: 36,
    padding: 10,
    marginBottom: 5,
    fontFamily: theme.fonts.main,
  }
});




export const AppBar = (props) => {

  const { data } = useQuery(SIGNED_IN_USER);
  console.log('AppBar, data: ',data);

  const signedInUser = data ? data.me : undefined;
  console.log('signedInUser:', signedInUser);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    console.log('sign out handled');
  };


  return (
    <View style = {styles.container}>
      <ScrollView horizontal>
          <Pressable>
          </Pressable>
          <Link to='/'>
            <Text style={styles.appBarText}>{props.titleText}</Text>
          </Link>
          {!signedInUser &&
            <Link to='signin'>
              <Text style={styles.appBarText}>Sign in</Text>
            </Link>
          }
          {signedInUser &&
          <Pressable onPress={handleSignOut} >
            <Text style={styles.appBarText}>Sign Out</Text>
          </Pressable>}
          <Link to='/repository/jaredpalmer.formik'>
            <Text style={styles.appBarText}>TEMP LINK</Text>
          </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;

