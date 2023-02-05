import { createSlice } from '@reduxjs/toolkit'

const da={
  active:{
    id:13132,
    title:'',
    body:'',
    date:12323,
    imageUrls:[]
  }
}

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

    },
    setSaving:(state)=>{

    },
    updateNote:(state,{payload})=>{

    },
    deleteNoteById:(state,{payload})=>{

    }
    
  },
})

export const { savingNewNote,addNewEmptyNote, setActiveNote,setNotes,setSaving,updateNote,deleteNoteById } = journalSlice.actions;