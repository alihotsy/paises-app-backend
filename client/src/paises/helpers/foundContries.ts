import React from 'react'
import { Country } from '../interfaces/country';

export const foundContries = (countries:Country[], query:string = '') => {
    console.log('foundCoutries',query)
    if(!query) { 
      console.log('inside if')
      return []
     }
     console.log('outside if')
    query = query[0].toUpperCase() + query.substring(1);
  return countries.filter(country => country.name.common.includes(query));
}
