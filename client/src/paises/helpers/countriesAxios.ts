import axios from "axios";
import { Country } from "../interfaces/country";


export const countriesAxios = async():Promise<Country[]> => {
    const { data } = await axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,flags,cca2,region,area');
    return data;
}