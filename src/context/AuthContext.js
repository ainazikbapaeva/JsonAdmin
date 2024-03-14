import React, { createContext, useContext } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const AuthContext = ({ children }) => {
  function register(email, password) {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  }

  let values = {
    register,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
