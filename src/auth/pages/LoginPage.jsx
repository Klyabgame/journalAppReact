import React from 'react'

export const LoginPage = () => {
  return (
    <>  
        <div className="container bg-purple-800 w-full max-h-full flex justify-center items-center">
            <div className="container bg-blue-500 w-1/2 rounded-lg">
                <form action="">
                    <h1 className='text-purple-900'>Login</h1>
                   <div className="flex gap-2 mt-2 justify-center ml-9 ">
                        <label htmlFor="">id :</label>
                        <input className='w-1/2' type="text" placeholder='escriba su id' />
                   </div>
                    <div className="mt-2 flex gap-2 justify-center ">
                        <label htmlFor="">password :</label>
                        <input className='w-1/2' type="text" placeholder='escriba su contraseña' />
                    </div>
                    <div className="flex gap-8 justify-center bg-red-500 p-2">
                        <button className='bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-900'>INGRESAR</button>
                        <button className='bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-900' >REGISTRARSE</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
