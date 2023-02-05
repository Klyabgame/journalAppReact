import React from 'react'
import { AddButtonNote } from './AddButtonNote';

export const DataView = () => {
  const urlImg=`../../../public/img/comida.jpg`;
  return (
    <div className="container  rounded-lg  flex flex-col justify-start items-center ">
            <div className=" flex justify-between  w-full items-center">
                <p className=' ml-4 text-xl'>28 DE DICIEMBRE 2022</p>
                <a className='hover:cursor-pointer mr-28'><i className="fa-solid fa-floppy-disk fa-lg mr-2"></i>GUARDAR</a>
            </div>
            <div className="container flex flex-col gap-4 p-2">
              <input className='w-11/12 p-2 rounded-lg border-2 border-purple-700' type="text" placeholder='ESCRIBA SU TAREA 1 ' />
              <textarea className='w-11/12 p-2 rounded-lg border-2 border-purple-700 h-32 ' placeholder='Que desea escribir?'/>
              
            </div>
            <div className=" overflow-auto h-96  grid grid-cols-3 gap-2 ml-2 mr-24  ">
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
              <img src={urlImg} alt="comida" />
            </div>
            <AddButtonNote/>
            <div className="">imageGalery</div>
    </div>
  )
}
