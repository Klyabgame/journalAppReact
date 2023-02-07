import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/auth/authSlice';
import { startActiveNote } from '../../store/journal/thunks';

export const JournalNotes = ({id,title,date,body,imageUrls}) => {
    const dispatch=useDispatch();

    const onNotesActive=()=>{
        console.log('clickeado');

        dispatch(startActiveNote({id,title,date,body,imageUrls}))
    }
  return (
    <>
        <li onClick={()=>onNotesActive()} className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400 hover:cursor-pointer"><a className="flex items-center" ><i className="fa-regular fa-calendar-check mx-2"></i><p>{title}</p></a></li>
    </>
  )
}
