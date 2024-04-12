import { auth } from "../firabase";
import { signInWithEmailAndPassword } from "firebase/auth";

const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return user;
};

export default login;
