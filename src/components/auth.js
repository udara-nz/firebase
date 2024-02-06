import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  console.log(auth?.currentUser.photoURL);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, Password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input placeholder="Emal..." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign In </button>

      <button onClick={signInWithGoogle}> Sign In with Google </button>

      <button onClick={logout}> Log Out </button>
    </div>
  );
};
