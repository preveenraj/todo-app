import React, { useEffect } from "react";
import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

import { signIn } from "../services";
import { Button } from "./ui/button";

const SignIn: React.FC<> = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { user: dbUser } = await signIn(result.user);
      const user = {
        ...result.user,
        ...dbUser,
      };
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("🚀 ~ handleSignIn ~ error:", error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      console.log("🚀 ~ useEffect ~ parseduser", parsed);
    }
  }, []);

  return <Button onClick={handleSignIn}>Sign In with Google</Button>;
};

export default SignIn;
