import { Grid } from '@mui/material';
import { countryFilters } from '../helpers/countryFilters';
import { CountryCard } from './CountryCard';

export type props = {
    region:string
}

export const CountryList = ({region}:props) => {
     
    

    const countries = countryFilters(region);

    return (
        <Grid container spacing="10px">
          {
            countries.map((country) => (
              <Grid key={country.cca2} item xs={3}>
                 <CountryCard {...country} />
              </Grid>
              
            ))
          }
        </Grid>
    )
}
