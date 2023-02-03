import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAutentication, startGoogleAutentication, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const LoginPage = () => {

    const {status}= useSelector(state=>state.auth)
    const dispatch=useDispatch();
    const {email,password,onInputChange}=useForm({
        email:'franzito@gmail.com',
        password:123456,
    })

    const onsubmitt=(e)=>{
        e.preventDefault();
        dispatch(startLoginWithEmailPassword({email,password}));
    }
    const onGoogleSignIn=()=>{
        dispatch(startGoogleAutentication(email,password));
    }

    const isAutenticating=useMemo(()=>status==='checking',[status]);

  return (
        <div className="container bg-purple-800 max-w-full h-screen flex justify-center items-center">
            <div className="container bg-white drop-shadow-2xl w-1/2 lg:w-1/3  rounded-lg ">
                <form onSubmit={onsubmitt}>
                    <h1 className=' ml-2'>Login</h1>
                   <div className="flex gap-2 mt-4 justify-center">
                        <label className=' ml-14 flex items-center' >id :</label>
                        <input className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg' type="text" placeholder='escriba su id' name='email' value={email} onChange={onInputChange}/>
                   </div>
                    <div className="mt-4 flex gap-2 justify-center ">
                        <label className='flex items-center' htmlFor="">password :</label>
                        <input className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg' type="text" placeholder='escriba su contraseña' name='password' value={password} onChange={onInputChange}/>
                    </div>
                    <div className="flex gap-8 justify-center  p-2 mt-4">
                        <button type='submit' disabled={isAutenticating} className='bg-purple-700 disabled:bg-gray-400 text-white p-2 rounded-lg hover:bg-purple-900 w-1/3'>INGRESAR</button>
                        <button type='submit' disabled={isAutenticating} onClick={()=>onGoogleSignIn()}  className='bg-purple-700 disabled:bg-gray-400 text-white p-2 rounded-lg hover:bg-purple-900 w-1/3' >GOOGLE</button>
                        
                    </div>
                    <div className="flex my-2 justify-end mr-2">
                        <Link to={'/auth/register'} className=' underline text-purple-500 text-xs ' >REGISTRARSE</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}
