import { createContext } from "react";
import { Country } from "../paises/interfaces/country";
import { State } from "./authReducer";

export type GlobalValues = {
    countries:Country[],
    login: (name:string) => void,
    logout: () => void,
    user:{id:number,name:string},
    isLogged:boolean
}

export const GlobalContext = createContext<GlobalValues>({} as GlobalValues);