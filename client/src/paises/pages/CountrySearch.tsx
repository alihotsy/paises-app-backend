import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { deepPurple, teal } from '@mui/material/colors'
import { FormEvent, useContext, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import queryString, { ParsedQuery } from 'query-string';
import { GlobalContext } from '../../context/GlobalContext'
import { foundContries } from '../helpers/foundContries'
import { CountryCard } from '../components/CountryCard'


export const CountrySearch = () => {
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const { countries } = useContext(GlobalContext);
  const { search, handleInput } = useForm({ search: `${q}`});
  const navigate = useNavigate();

  const  value =  useMemo(() => foundContries(countries,`${q}`), [q]);
  console.log(value);


  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    navigate(`?q=${search}`)
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        
      <Box>
        <form onSubmit={ handleSubmit } style={{position:'fixed'}}>
            <h1>
            <Typography style={{fontSize:'37px',color:deepPurple[400]}}>Search a country</Typography>
            </h1>
            <TextField
            fullWidth
            label="Search"
            size="small"
            variant="outlined"
            color='secondary'
            sx={{mb:'5px'}}
            InputProps={{style:{background:"#4F4E50",color:'#fff'}}}
            InputLabelProps={{style:{color:teal[400]}}}
            name="search"
            value={ search }
            onChange={ handleInput }
            />
            <Button 
              fullWidth 
              color="warning" 
              variant='contained'
              type='submit'
              >
                Search
            </Button>
        </form>
      </Box>
      </Grid>
        <Grid item xs={9} sx={{paddingLeft:'30px'}}>
          <Grid container>
          <Grid item xs={12} style={{position:'relative',top:'98px'}}>
            <Alert variant="filled" severity='info' style={{display:!q ? '' : 'none' }}>
              A Filtered country will appear here. The search input must not be empty 
            </Alert>
            <Alert variant='filled' severity='error'style={{display: q && !value.length ? '' : 'none'}}>
               A country with name: <strong style={{color:'yellow'}}>{ q }</strong> couldn't be found
            </Alert>

          </Grid>
              {
                value.map(country => (
                  <Grid key={country.cca2} item xs={4}>
                    <CountryCard {...country}/>
                  </Grid>

                ))
              }
          </Grid>
        </Grid>
      </Grid>
  )
}
