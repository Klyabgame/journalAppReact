import React from 'react'

export const DataView = () => {
  return (
    <div className="container  rounded-lg h-full flex flex-col justify-start items-center ">
            <div className=" flex justify-between  w-full items-center">
                <p className=' ml-4 text-xl'>28 DE DICIEMBRE 2022</p>
                {/* GUARDAR */}
                <i className="fa-solid fa-floppy-disk fa-lg hover:cursor-pointer"></i>
            </div>
            <div className="container flex flex-col gap-4 p-2">
              <input className='w-11/12 p-2 rounded-lg border-2 border-purple-700' type="text" placeholder='ESCRIBA SU TAREA 1 ' />
              <textarea className='w-11/12 p-2 rounded-lg border-2 border-purple-700 h-32 ' type="text" placeholder='Que sucedio el dia de Hoy?'/>
            </div>
            <div className="">imageGalery</div>
    </div>
  )
}
