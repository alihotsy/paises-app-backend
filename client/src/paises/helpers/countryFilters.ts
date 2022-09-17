import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Country } from "../interfaces/country";

 export const countryFilters = (region:string):Country[] => {

    const { countries } = useContext(GlobalContext);

    if(region === 'all' || !region) {
        return countries;
    }
    return countries.filter(country => country.region === region);
 }