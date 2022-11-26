import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init';



const auth = getAuth(app)
export const authContext = createContext()



const SharedContext = ({children}) => {
   const [user,setUser] = useState()

   const googleAuth = new GoogleAuthProvider()


   const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
   }

   const signInUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (profile) =>{
      return updateProfile(auth.currentUser,profile);
   }

   const userDelete = ()=>{
      return deleteUser(auth.currentUser)
   }

   const createGoogleUser = () =>{
      return signInWithPopup(auth, googleAuth)
        
   }


   const logOut = () =>{
      return signOut(auth);
   }

   useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser)
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