import React, { useState } from 'react'
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formaData={
    email:'franzito@gmail.com',
    password:123456,
    displayName:'franz schwartz'
}

export const RegisterPage = () => {
    const validateForm={
        email:[(valid)=>valid.includes('@'),'el email debe contener un @'],
        password:[(valid)=>valid.length >=6,'el password debe contener 6 caracteres'],
        displayName:[(valid)=>valid.length>=1,'el name debe contener mas de 1 caracter'],
    }
    //formactive nos servira cuando intentemos entrar al formulario y veamos las casillas activas.
    const [formActive, setformActive] = useState(false);
    const {status,errorMessage}=useSelector((state)=>state.auth);
    const isCheckingAuthentication=useMemo(() => status=='checking', [status])

    const {displayName,email,password,onInputChange,formState,isFormValid,displayNameValid,emailValid,passwordValid}=useForm(formaData,validateForm);
    const dispatch=useDispatch();
    /* console.log(displayNameValid); */

    const onSubmitRegister=(e)=>{
        e.preventDefault();
        if(!isFormValid) return;
        console.log(formState);
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    
  return (
    <div className="container bg-purple-800 max-w-full h-screen flex justify-center items-center">
            <div className="container bg-white drop-shadow-2xl w-1/2  xl:w-1/3 rounded-lg">
                <h1>FormValid: {isFormValid? 'valido':'incorrecto'}</h1>
                <form onSubmit={onSubmitRegister} className='p-2 '>
                    <h1 className=' ml-2'>Register</h1>
                    <hr />
                    <div className="mt-4 flex gap-2 justify-center">
                        <label className='flex items-center' htmlFor="">NOMBRE :</label>
                        <input 
                        name='displayName'
                        value={displayName}
                        onChange={onInputChange}
                        className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg' type="text" placeholder='escriba su nombre' />
                    </div>
                   <div className="flex gap-2 mt-4 justify-center">
                        <label className=' flex items-center' htmlFor="">CORREO :</label>
                        <input 
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg   ' type="text" placeholder='escriba su correo' />
                   </div>
                    <div className="mt-4 flex gap-2 justify-center ">
                        <label className='flex items-center ' htmlFor="">PASSWORD :</label>
                        <input 
                        name='password'
                        value={password}
                        onChange={onInputChange}
                        className='w-2/3 p-2 border-2 border-bg-blue-500 rounded-lg mr-5' type="text" placeholder='escriba su contraseña' />
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
