import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = () => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return (
            <div>در حال بارگیری....</div>
        )
    }
    if(user){
        return children
    }
  return (
    <Navigate to="/login" state={{form:location}} replace></Navigate>
  )
}

export default PrivateRoute