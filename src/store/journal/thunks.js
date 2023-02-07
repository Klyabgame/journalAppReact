import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadingNotes } from "../../journal/helpers/loadingNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote=()=>{
    return async(dispatch,getstate)=>{

        dispatch(savingNewNote());

        const {uid}=getstate().auth;
        //uid
        const newNote={
            title:'',
            body:'',
            date:new Date().getTime(),
        }

        const newDoc=doc(collection(FirebaseDB,`${uid}/journal/notes`));
        const setDocResp=await setDoc(newDoc,newNote);

        newNote.id=newDoc.id;
        //dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const startLoadingNotes=()=>{
    return async(dispatch,getstate)=>{
        const {uid}=getstate().auth;
        if(!uid) throw new Error('el uid del usuario no existe');
        
        const dataNotes = await loadingNotes(uid);

        dispatch(setNotes(dataNotes));


    }
}

export const startActiveNote=({id,title,date,body,imageUrls=[]})=>{
    return async(dispatch,getstate)=>{

        dispatch(setActiveNote({id,title,date,body,imageUrls}));
    }
}