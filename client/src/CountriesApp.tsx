import { createTheme, ThemeProvider } from "@mui/material"
import { teal } from "@mui/material/colors"
import { GlobalProvider } from "./context/GlobalProvider"
import { CountriesRouter } from "./router/CountriesRouter"

const theme = createTheme({
    palette:{
        primary:{
            main:"#071426" //#071426 / #0b213f
        },
        secondary:{
            main:teal['A400']
        }
    }
})


export const CountriesApp = () => {
    return (
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <CountriesRouter/>

            </ThemeProvider>
        </GlobalProvider>
    )
  
}
