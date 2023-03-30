import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {collection, addDoc, Timestamp, setDoc,doc,getDocs} from 'firebase/firestore'
import { auth, db } from "../firebase/config";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const userref = collection(db, 'users');
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  function addtodb(count, data,count1,data1,surveydtata,ph) {
    return  setDoc(doc(db, "rating", "ratingdata"), {
      reratingcount: count,
      reratingdata: data,
      counterratingcount: count1,
      counterratingdata: data1,
      usersurvey:surveydtata,
      phone:ph

    
    });
  }

  function logOut() {
    return signOut(auth);
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{  logIn, logOut,addtodb }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(userAuthContext);
}