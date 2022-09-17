import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'


type props = {
    children: JSX.Element
}

export const PrivateRoutes = ({children}:props) => {

  const { pathname } = useLocation();

  localStorage.setItem('lastPath',pathname);

  const { isLogged } = useContext(GlobalContext);

  return (isLogged) ? children : <Navigate to="/login"/>
}
