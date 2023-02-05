import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote=()=>{
    return async(dispatch,getstate)=>{

        dispatch(savingNewNote());

        const {uid}=getstate().auth;
        //uid

        console.log('StartNewNOte');
        const newNote={
            title:'',
            body:'',
            date:new Date().getTime(),
        }

        const newDoc=doc(collection(FirebaseDB,`${uid}/journal/notes`));
        const setDocResp=await setDoc(newDoc,newNote);

        console.log({newDoc,setDocResp});
        newNote.id=newDoc.id;
        //dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}