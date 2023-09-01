import { Pressable, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormikTextInput } from './FormikTextInput';
import theme from '../theme';
import useSignup from '../hooks/useSignup';

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
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  //password: yup.string().required('Password is required'),
  password: yup.string().min(5).max(30).required('Password 5-30 characters is required'),
  passwordConfirm: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords differ')
     .required('Password confirm is required'),
  username: yup.string().min(5).max(30).required('Username 5-30 characters is required')
});



// const validationSchema = yup.object().shape({
//   ownerName: yup.string().required('Repository owner is required'),
//   rating: yup.number().min(0).max(100).required('Rating is required'),
//   repositoryName: yup.string().required('Repository name is required'),
// });

const SignupForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput name="passwordConfirm" placeholder="Password confirmation" secureTextEntry/>
      <Pressable
          onPress={onSubmit}
          style={styles.button}
       >
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export const SignupContainer = ({ onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit} />}
  </Formik> );
};

export const SignUp = () => {

  const [signUp] = useSignup();

  const onSubmit = async (values) => {
    const { username, password } = values;
    //console.log('onSubmit username, password', username, password);

    try {
      const  data  = await signUp({ username, password });
      console.log('in component Signup return data:', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignupContainer
      onSubmit={onSubmit}
    />
  );

};



export default SignUp;