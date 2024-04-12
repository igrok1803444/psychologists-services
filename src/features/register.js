import { auth } from "../firabase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const registerfunc = async (email, name, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  if (user) {
    await updateProfile(user, { displayName: name });
  }

  return user;
};

export default registerfunc;
