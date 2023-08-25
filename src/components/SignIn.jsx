import { Pressable, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { FormikTextInput } from './FormikTextInput'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 20,
    backgroundColor: 'blue',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
const initialValues = {
  username: '',
  password: '',
};


const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Pressable
          onPress={onSubmit}
          style={styles.button}
       >
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
  {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
</Formik> )
};



export default SignIn;