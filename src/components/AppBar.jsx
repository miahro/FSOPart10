import { StyleSheet, Text, Pressable, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#24292e',
    padding: 12,
  },
  appBarText: {
    color: 'white',
    fontSize: 36,
    padding: 10,
    marginBottom: 20,
  }
});


export const AppBar = (props) => {
  return (
    <View style = {styles.container}>
      <ScrollView horizontal>
          <Pressable>
          </Pressable>
          <Link to='/'>
            <Text style={styles.appBarText}>{props.titleText}</Text>
          </Link>
          <Link to='signin'>
            <Text style={styles.appBarText}>Sign in</Text>
          </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;

