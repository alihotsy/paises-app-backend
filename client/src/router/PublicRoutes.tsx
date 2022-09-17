import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"


type props = {
    children: JSX.Element
}

export const PublicRoutes = ({children}:props) => {
    const { isLogged } = useContext(GlobalContext);
    return (isLogged) ? <Navigate to="/"/> : children
}
