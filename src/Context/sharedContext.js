import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init';



const auth = getAuth(app)
export const authContext = createContext()



const SharedContext = ({children}) => {
   const [user,setUser] = useState('')
      const [loading, setLoading] = useState(true);


   const googleAuth = new GoogleAuthProvider()


   const createUser = (email,password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password);
   }

   const signInUser = (email, password) => {
      setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (profile) =>{
      setLoading(true);
      return updateProfile(auth.currentUser,profile);
   }

   const userDelete = ()=>{
      setLoading(true);
      return deleteUser(auth.currentUser)
   }

   const createGoogleUser = () =>{
      setLoading(true);
      return signInWithPopup(auth, googleAuth)
        
   }


   const logOut = () =>{
      return signOut(auth);
   }

   useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser)
         setLoading(false);
      })
      return () => unsubscribed();
   },[])








   const authInfo = {
     user,
     createUser,
     signInUser,
     logOut,
     updateUser,
     userDelete,
     createGoogleUser,
     loading,
   };

   return (
      
      <div>
         <authContext.Provider value={authInfo}>
            {children}
         </authContext.Provider>
      </div>
   );
};

export default SharedContext;