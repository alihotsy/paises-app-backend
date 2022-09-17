import { Card, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { indigo, pink, teal } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext"
import { Country } from "../interfaces/country";


export const CountryPage = () => {

  const { id } = useParams();
  const { countries } = useContext(GlobalContext);
  const country:Country = countries.find(country => country.cca2 === id)!;
  

  if(!country){
    return <Navigate to="/"/>
  }
  
  return (
    <Grid container justifyContent="center" paddingTop="67px">
      <Grid item display="flex">
          <Box style={{
            boxShadow:'0 0 9px 4px #fff',
            padding:'5px',
            display:'flex',
            alignItems:'center',
            marginLeft:'14px',
            flexDirection:'row-reverse',
            order:'3'
          }}>
            <img src={`${country.flags.png}`} alt={country.name.common} style={{height:'285px'}} />

          </Box>
          <Container sx={{background:'#fff',borderRadius:'4px',paddingBottom:'9px'}}>
              <h1 style={{padding:'0',color:indigo[800]}}>
                <Typography style={{fontSize:'34px',fontWeight:'bold'}}>{country.name.common}</Typography>
              </h1>
            <Typography>
              <span>
                <strong style={{color:teal[500]}} >Capital:</strong> {country.capital}
              </span>
            </Typography>
            <hr />
            <Typography>
              <span>
                <strong style={{color:teal[500]}} >Region:</strong> {country.region}
              </span>
            </Typography>
            <hr />
            <Typography>
              <span>
                <strong style={{color:teal[500]}} >Population:</strong> {country.population}
              </span>
            </Typography>
            <hr />
            <Typography>
              <span>
                <strong style={{color:teal[500]}} >Area:</strong> {country.area}
              </span>
            </Typography>
            <hr />
            <Typography>
              <span>
                <strong style={{color:teal[500]}} >ID:</strong> {country.cca2}
              </span>
            </Typography>
          </Container>
       
      </Grid>

    </Grid>
  )
}
