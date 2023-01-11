import React from 'react'
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="container bg-purple-800 max-w-full h-screen flex justify-center items-center">
            <div className="container bg-white drop-shadow-2xl w-1/2  xl:w-1/3 rounded-lg">
                <form action="" className='p-2 '>
                    <h1 className=' ml-2'>Register</h1>
                    <hr />
                    <div className="mt-4 flex gap-2 justify-center">
                        <label className='flex items-center' htmlFor="">NOMBRE :</label>
                        <input className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg' type="text" placeholder='escriba su nombre' />
                    </div>
                   <div className="flex gap-2 mt-4 justify-center">
                        <label className=' flex items-center' htmlFor="">CORREO :</label>
                        <input className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg   ' type="text" placeholder='escriba su correo' />
                   </div>
                    <div className="mt-4 flex gap-2 justify-center ">
                        <label className='flex items-center ' htmlFor="">PASSWORD :</label>
                        <input className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg mr-5' type="text" placeholder='escriba su contraseña' />
                    </div>
                    <div className="flex gap-8 justify-center  p-2 mt-4">
                        <button className='bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-900'>CREAR CUENTA</button>
                    </div>
                    <div className="flex my-2 justify-end mr-2 items-center">
                        <h1 className='text-purple-500 mr-2'>¿Ya tienes cuenta?</h1>
                        <Link to={'/auth/login'} className=' underline text-purple-500 text-xs ' >INGRESAR</Link>
                    </div>
                </form>
            </div>
    </div>
  )
}
