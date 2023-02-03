import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckingStatus } from '../hooks/useCheckingStatus'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'


export const RouterPrincipal = () => {
    const {status}=useCheckingStatus();

    if (status==='checking') {
      return <CheckingAuth />
    }
  return (
   <>
        <Routes>
            {
               (status==='autenticated')?
                <Route path='/*' element={<JournalRoutes/>}/>:
                <Route path='auth/*'  element={<AuthRoutes/>}/>
            }
            <Route path='/*' element={<Navigate to={'/auth/login'}/>}/>

        </Routes>
   </>
  )
}