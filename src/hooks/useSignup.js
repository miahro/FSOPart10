import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignup = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ password, username  }) => {
    const { data } = await mutate({
      variables: {
        "user": {
          "password": password,
          "username": username
        }
      }
    });

    return data;
  };
  return [createUser, result];
};

export default useSignup;
