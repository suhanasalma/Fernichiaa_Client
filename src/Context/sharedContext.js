import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init';



const auth = getAuth(app)
export const authContext = createContext()


const SharedContext = ({children}) => {
   const [user,setUser] = useState()


   const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
   }

   const signInUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (profile) =>{
      return updateProfile(auth.currentUser,profile);
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








   const authInfo = { user, createUser, signInUser, logOut, updateUser };

   return (
      
      <div>
         <authContext.Provider value={authInfo}>
            {children}
         </authContext.Provider>
      </div>
   );
};

export default SharedContext;