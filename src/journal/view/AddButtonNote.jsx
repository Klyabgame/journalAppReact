import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const AddButtonNote = () => {
    const {isSaving}=useSelector((state)=>state.journal);
    const dispatch= useDispatch();
  
    const onNewNote=()=>{
  
      dispatch(startNewNote());
    }
  
    const isnewNoteStatus=useMemo(()=>isSaving===true,[isSaving]);
  return (
    <>
        <div className="flex justify-end w-11/12 mt-2 mr-28">
              <button onClick={onNewNote} disabled={isnewNoteStatus} className=' disabled:bg-gray-500 bg-red-500 w-20 h-20 rounded-full hover:text-white'><i class="fa-solid fa-plus"></i></button>
        </div>
    </>
  )
}
