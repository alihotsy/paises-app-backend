
import { BrowserRouter } from "react-router-dom";
import { useCountry } from "../paises/hooks/useCountry";
import { Country } from "../paises/interfaces/country";
import { Navbar } from "../shared/Navbar";
import { GlobalContext } from "./GlobalContext"
import { createTheme, ThemeProvider } from "@mui/material"
import { teal } from "@mui/material/colors"
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { type } from "../Auth/types/type";


const theme = createTheme({
    palette:{
        primary:{
            main:"#071426" //#071426 / #0b213f
        },
        secondary:{
            main:teal['A400']
        }
    }
})

export type props = {
   children: JSX.Element
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')!); 
  return {
    user,
    isLogged:!!user
  }
}


export const GlobalProvider = ({children}:props) => {

    const countries:Country[] = useCountry();

    const [state, dispatch] = useReducer(authReducer,{},init);

    const login = (name:string = '') => {
      const user = {id:new Date().getTime(),name}

      localStorage.setItem('user',JSON.stringify(user));

      const action = {
        type: type.login,
        payload: user
      }
      dispatch(action);
    }

    const logout = () => {

      localStorage.removeItem('user');
      const action = {
        type: type.logout,
        payload: {id:0,name:''}
      }
      dispatch(action);
    }
  
    if(countries.length){
      return (
        <GlobalContext.Provider value={{countries,login,logout,...state}}>
           {children}
        </GlobalContext.Provider>
      )
      
    }
    
}
