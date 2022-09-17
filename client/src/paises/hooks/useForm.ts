import { ChangeEvent, useState } from "react";


export type Search = {
    search:string
}

export const useForm = (value:Search) => {
    const [inputValue, setInputValue] = useState<Search>(value);
    

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue({
         ...inputValue,
         [e.target.name]:e.target.value
        })
   }

   

  return { ...inputValue, handleInput };
}
