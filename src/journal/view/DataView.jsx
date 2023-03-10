import React, { useEffect, useRef } from 'react'
import { AddButtonNote } from './AddButtonNote';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { startActiveNote, startDeletingNote, startEditNote, startUploadingFiles } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const DataView = () => {
  const urlImg=`../../../public/img/comida.jpg`;
  const {active:note,messageSaved} = useSelector(state=>state.journal);
  const dispatch=useDispatch();
  const {title,id,body,date,onInputChange,formState} = useForm(note);

  const newdate=useMemo(() => {
    const dateFormat=new Date(date).toUTCString();
    return dateFormat;
  } , [date])

  useEffect(() => {
    dispatch(startActiveNote(formState));
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      console.log('si llego');
      Swal.fire('nota actualizada', messageSaved,'success')
    }
   
  }, [messageSaved])
  
  
  const onNewEditNote=()=>{
    dispatch(startEditNote());
  }
  const onImageclick=({target})=>{
    if(target.files === 0) return ;

    dispatch(startUploadingFiles(target.files) );
  }
  const refUpload = useRef();

  const onDelete=()=>{
    dispatch(startDeletingNote());
  }
  

  return (
    <div className="container  rounded-lg  flex flex-col justify-start items-center ">
            <div className=" flex justify-between  w-full items-center">
                <p className=' ml-4 text-xl'>{newdate}</p>

                {/* imagenes */}
                <input className='hidden' type="file" multiple onChange={onImageclick} ref={refUpload}/>
                <div className="">
                  <a 
                  onClick={()=>onDelete()}
                  className='hover:cursor-pointer mr-6'><i className="fa-sharp fa-solid fa-trash fa-xl"></i></a>
                  <a className='hover:cursor-pointer mr-6 ' ><i className="fa-sharp fa-solid fa-cloud-arrow-up fa-xl" onClick={()=>refUpload.current.click()}></i></a>
                  {/* ----------------- */}
                  <a className='hover:cursor-pointer mr-28' onClick={()=>onNewEditNote()}><i className="fa-solid fa-floppy-disk fa-lg mr-2"></i>GUARDAR</a>
                </div>
                
            </div>
            <div className="container flex flex-col gap-4 p-2">
              <input className='w-11/12 p-2 rounded-lg border-2 border-purple-700' 
              type="text" 
              placeholder='ESCRIBA SU TAREA 1 '
              name='title'
              value={title}
              onChange={onInputChange} />
              <textarea className='w-11/12 p-2 rounded-lg border-2 border-purple-700 h-32 ' 
              placeholder='Que desea escribir?'
              name='body'
              value={body}
              onChange={onInputChange}
              />
              
            </div>
            <div className=" overflow-auto h-96  grid grid-cols-3 gap-2 ml-2 mr-24  ">
              {
                note.imageUrls?.map((not)=>(
                  <img key={not} src={not} alt="comida" />
                ))
              }
              
            </div>
            <AddButtonNote/>
            <div className="">imageGalery</div>
    </div>
  )
}
