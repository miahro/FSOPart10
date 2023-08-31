import { Pressable, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormikTextInput } from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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
    fontFamily: theme.fonts.main
  },
});
const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

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

export const SignInContainer = ({ onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
  </Formik> );
};

export const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('onSubmit username, password', username, password);

    try {
      const  data  = await signIn({ username, password });
      console.log('in component signIn return data:', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer
      onSubmit={onSubmit}
    />
  );

//   return (
//   <Formik
//     initialValues={initialValues}
//     onSubmit={onSubmit}
//     validationSchema={validationSchema}
//   >
//   {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
// </Formik> );
};



export default SignIn;