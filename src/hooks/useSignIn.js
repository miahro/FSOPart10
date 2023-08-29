import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useContext } from "react";
import { useApolloClient } from "@apollo/client";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useNavigate } from "react-router-native";

//import { useAuthStorage } from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useContext(AuthStorageContext);
  //const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    console.log("data: ", data);
    await authStorage.setAccessToken(data.authenticate.accessToken);
    const temp = await authStorage.getAccessToken();
    console.log("temp: ", temp);
    apolloClient.resetStore();
    navigate("/");

    return data;
  };
  return [signIn, result];
};

export default useSignIn;
