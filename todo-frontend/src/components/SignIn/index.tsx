import React, { useEffect } from "react";
import { auth, provider } from "../../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";

import { Container, GoogleButton } from "./styles";

import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, AuthAction } from "../../reducer/userActions/types";
import { signIn } from "../../api";

const SignIn: React.FC<{
  dispatch: React.Dispatch<AuthAction>;
}> = ({
  dispatch,
}) => {

  const handleSignIn = async () => {
    try {
      dispatch({ type: AUTH_LOADING });
      const result = await signInWithPopup(auth, provider);
      const { user: dbUser } = await signIn(result.user);
      const user = {
        ...result.user,
        ...dbUser,
      };
      dispatch({
        type: AUTH_SUCCESS,
        payload: user,
      });
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error: any) {
      dispatch({ type: AUTH_ERROR, payload: error.toString() });
      // Handle sign-in error
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: AUTH_SUCCESS, payload: JSON.parse(user) });
    }
  }
  , [dispatch]);

  return (
    <Container>
      <GoogleButton onClick={handleSignIn}>Sign In with Google</GoogleButton>
    </Container>
  );
};

export default SignIn;
