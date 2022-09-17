import React, { useEffect, useState } from 'react'
import { countriesAxios } from '../helpers/countriesAxios';
import { Country } from '../interfaces/country';

export const useCountry = ():Country[] => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    countriesAxios()
      .then(data => setCountries([...data]))
       .catch(err => console.log(err));
  },[]);

  return countries;

}
