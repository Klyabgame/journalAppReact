import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadingNotes = async(uid='') => {
    if(!uid) throw new Error('el uid del usuario no existe');
    const collectionRef=collection(FirebaseDB,`${uid}/journal/notes`);
    const docs=await getDocs(collectionRef);
    const arrayDocs=[]
    docs.forEach(doc=>{
        arrayDocs.push(
            {
                id:doc.id,
                ...doc.data()
            }
        );
    })
    //console.log(arrayDocs);
    return arrayDocs;
}
