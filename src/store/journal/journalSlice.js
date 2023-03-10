import { createSlice } from '@reduxjs/toolkit'

/* const da={
  active:{
    id:13132,
    title:'',
    body:'',
    date:12323,
    imageUrls:[]
  }
} */

const initialState = {
  isSaving:false,
  messageSaved:'',
  notes:[],
  active:null,
  

}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote:(state,{payload})=>{
      state.isSaving=true;
    },
    addNewEmptyNote: (state,{payload}) => {
      state.notes.push(payload);
      state.isSaving=false;
    },

    setActiveNote:(state,{payload})=>{
      state.active=payload;
      
    },
    setNotes:(state,{payload})=>{
      state.notes=payload;
      
    },
    setSaving:(state,{payload})=>{
      state.isSaving=true;
      state.messageSaved='';
      ///todo
      
    },
    updateNote:(state,{payload})=>{
      state.isSaving=false;
      state.notes=state.notes.map((note)=>{
        if (note.id===payload.id) {
          return payload;
        }
        return note;
      })

      state.messageSaved=`${payload.title} a sido actualizado`;
    },
    setPhotosToActiveNotes:(state,{payload})=>{
        state.active.imageUrls=[...state.active.imageUrls,...payload];
        state.isSaving=false;
    },
    clearNotesLogout:(state)=>{
      state.isSaving=false,
      state.messageSaved='',
      state.notes=[],
      state.active=null
    }
    ,
    deleteNoteById:(state,{payload})=>{
        state.active=null;
        state.notes=state.notes.filter((note)=>note.id !== payload);
    }
    
  },
})

export const { 
  savingNewNote,
  addNewEmptyNote,
   setActiveNote,
   setNotes,
   setSaving,
   updateNote,
   setPhotosToActiveNotes,
   clearNotesLogout,
   deleteNoteById } = journalSlice.actions;