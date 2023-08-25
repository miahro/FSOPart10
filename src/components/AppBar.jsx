import { StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'flex-end',
    backgroundColor: '#24292e',
    padding: 12,
  },
  text: {
    color: 'white',
    fontSize: 36,
  }
});

const handlePress = () => {
  console.log('AppBar pressed')
}

export const AppBar = (props) => {
  return <Pressable style={styles.container} onPress={handlePress}>
    <Text style={styles.text}>{props.titleText}</Text>
    </Pressable>;
};

export default AppBar;