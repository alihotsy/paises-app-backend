import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material"
import { lightBlue } from "@mui/material/colors"
import { useNavigate } from "react-router-dom";
import { Flags, Name } from "../interfaces/country";

export type props = {
    name:Name,
    flags:Flags,
    cca2:string
}

export const CountryCard = ( { name,flags,cca2 }:props) => {

    const navigate = useNavigate();

  return (
    <Card style={{background:'transparent',border:'none'}}>
        <CardHeader style={{
            textAlign:'center',
            color: lightBlue['A400'],
            fontSize:"10px"
        }} 
        titleTypographyProps={{variant:'h6'}}
        title={`${name.common}`}
        />
        <CardContent style={{display:'flex',justifyContent:'center'}}>
            <img style={{
            height:'180px',width:'180px',borderRadius:'50%'
            }} src={flags.png} alt={name.common} />
        </CardContent>
        <CardActions>
            <Button 
                fullWidth 
                variant='contained' 
                color="info"
                onClick={ () => navigate(`/country/${cca2}`) } 
                >
                See more...
            </Button>
        </CardActions>

    </Card>
  )
}
