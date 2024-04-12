import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjJSnFIvF7KUZnMcmPH7dtIcoQ7ECcQT0",
  authDomain: "psychologists-db.firebaseapp.com",
  databaseURL: "https://psychologists-db-default-rtdb.firebaseio.com",
  projectId: "psychologists-db",
  storageBucket: "psychologists-db.appspot.com",
  messagingSenderId: "281019941810",
  appId: "1:281019941810:web:3791d6c980810c728cdaab",
  measurementId: "G-KGSD6ZSV48",
};

const fireBaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireBaseApp);
