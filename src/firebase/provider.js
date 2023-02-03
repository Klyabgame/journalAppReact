import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const GooogleProvider= new GoogleAuthProvider();


export const signInWithGoogle=async()=>{
    try {
        
        const result=await signInWithPopup(FirebaseAuth, GooogleProvider);
        //const credentials=GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid}=result.user;
        
        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorMessage = error.message;

        return{
            ok:false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword=async({email,password,displayName})=>{
    try {
        const resp=await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL}=resp.user;
        console.log(resp);
        //todo:actializar el displayName en firebase
        await updateProfile(FirebaseAuth.currentUser,{
            displayName
        });
        return{
            ok:true,
            uid,photoURL,email,displayName
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage,
        }
        
    }
}

export const loginWithEmailPassword=async({email,password})=>{
    try {
        const {user}=await signInWithEmailAndPassword(FirebaseAuth,email,password);

        const {uid,
            photoURL,
            displayName,
            }= user
        return{
            ok:true,
            uid,
            photoURL,
            displayName,
        }

    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage
        }

    }
}

export const logoutcount=async()=>{
    return await FirebaseAuth.signOut();
}
