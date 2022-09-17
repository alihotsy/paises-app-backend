import { TextField } from "@mui/material"
import { ChangeEvent } from "react"

export type props = {
    handleInputChange: ({target}:ChangeEvent<HTMLInputElement>) => void,
    value:string,
    name:string,
    label:string,
    sx:sxProp,
    color:string,
    type:string
}

export type sxProp = {
    mb:string
}

export const Input = ({ handleInputChange,value,name,label,sx, color,type }:props) => {
  return (
    <TextField
      fullWidth
      size='small'
      label={label}
      color='info'
      variant='filled'
      sx={sx}
      InputProps={{style:{color}}}
      name={name}
      onChange={handleInputChange}
      value={value}
      type={type}
    />
  )
}
