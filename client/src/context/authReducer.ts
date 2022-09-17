import { type } from "../Auth/types/type";

  export type State = {
    user:{id:number,name:string}, 
    isLogged:boolean
  }
  

 export type Action = {
    type:string,
    payload:{id:number,name:string}
 }

 export const authReducer = (state:State,action:Action):State => {

    switch (action.type) {
        case type.login:
            return {
                user:action.payload,
                isLogged:true
            }
        case type.logout:
            return {
                user:{id:0,name:''},
                isLogged:false
            }
        default: 
           return state;
    }
 }