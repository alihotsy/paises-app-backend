
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../Auth/pages/Login"
import { Navbar } from "../shared/Navbar"
import { Container } from "@mui/system"
import { CountryRoutes } from "../paises/routes/CountryRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"




export const CountriesRouter = () => {
  return (
    <BrowserRouter>
      <Container>
       <Routes>
         <Route path="login" element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
         }/>
         <Route path="create" element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
         }/>
         <Route path="*" element={
          <PrivateRoutes>
            <CountryRoutes/>
          </PrivateRoutes>
         }/>
       </Routes>
      </Container>
    </BrowserRouter>
  )
}
