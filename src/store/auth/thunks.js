import { async } from "@firebase/util";
import { loginWithEmailPassword, logoutcount, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAutentication=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}
export const startGoogleAutentication=(email,password)=>{
    return async(dispatch)=>{

        dispatch(checkingCredentials());
        
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));

    }
}

export const startCreatingUserWithEmailPassword=({email,password,displayName})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid,displayName,email,photoURL}));
    }
}

export const startLoginWithEmailPassword=({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const {ok,
            uid,
            photoURL,
            displayName,
            errorMessage
            }=await loginWithEmailPassword({email,password});
        if(!ok)return dispatch(logout({errorMessage}));
        dispatch(login({
            uid,
            photoURL,
            displayName,
            email}));

    }
}
export const startLogout=()=>{
    return async(dispatch)=>{
        await logoutcount(dispatch(logout()));
    }
}