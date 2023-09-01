import { Pressable, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormikTextInput } from './FormikTextInput';
import theme from '../theme';
import useReview from '../hooks/useReview.js';

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
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner is required'),
  rating: yup.number().min(0).max(100).required('Rating is required'),
  repositoryName: yup.string().required('Repository name is required'),
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name"/>
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
      <FormikTextInput name="text" placeholder="review" multiline/>
      <Pressable
          onPress={onSubmit}
          style={styles.button}
       >
        <Text style={styles.text}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export const CreateReviewContainer = ({ onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
  </Formik> );
};

export const CreateReview = () => {

  const [createReview] = useReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    //console.log('onSubmit username, password', username, password);

    try {
      const  data  = await createReview({ ownerName, repositoryName, rating, text });
      console.log('in component Create Review return data:', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer
      onSubmit={onSubmit}
    />
  );

};



export default CreateReview;