import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, Password);
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
    </div>
  );
};
