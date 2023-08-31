import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 5,
    fontSize: 20,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: theme.fonts.main,
  },
  inputFieldError: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 5,
    fontSize: 20,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: theme.fonts.main,
  },
  errorText: {
    marginTop: 5,
    color: 'red',
    fontSize: 20,
  },
});

export const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  let style = styles.inputField;

  if (showError) {
    style = styles.inputFieldError;
  }

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={style}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;