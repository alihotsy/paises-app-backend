
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../shared/Navbar'
import { America } from '../pages/by-region/America'
import { Asia } from '../pages/by-region/Asia'
import { Europe } from '../pages/by-region/Europe'
import { Oceania } from '../pages/by-region/Oceania'
import { Countries } from '../pages/Countries'
import { CountryPage } from '../pages/CountryPage'
import { CountrySearch } from '../pages/CountrySearch'

export const CountryRoutes = () => {
  return (
    <>
      <Navbar/>
      
       <Routes>
         <Route path="/" element={<Countries/>}/>
         <Route path="america" element={<America/>}/>
         <Route path="asia" element={<Asia/>}/>
         <Route path="europe" element={<Europe/>}/>
         <Route path="oceania" element={<Oceania/>}/>
         <Route path="search" element={<CountrySearch/>}/>
         <Route path="country/:id" element={<CountryPage/>}/>
       </Routes>
    </>
  )
}
