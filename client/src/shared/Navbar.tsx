import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PublicIcon from '@mui/icons-material/Public';
import LogoutIcon from '@mui/icons-material/Logout';
import { lime } from "@mui/material/colors";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
//border: rgb(0, 76, 153)
export const Navbar = () => {

  const { user, logout } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleButtonLogout = () => {
      logout();
      navigate('/login');
  }

  return (
    <AppBar position="fixed">
        <Container sx={{display:'flex',justifyContent:"space-between",alignItems:'center'}}>
        <Toolbar style={{paddingLeft:0}}>
            
              <Typography>
                <NavLink to="/">
                  <PublicIcon fontSize="large" style={
                    {
                      filter: pathname === '/' ? 'invert(83%) sepia(90%) saturate(700%) hue-rotate(900deg) brightness(118%) contrast(119%)' : '',
                      color:'#fff'
                    }
                  }/> 
                </NavLink>
              </Typography>
              
            
              <Typography>
                <NavLink to="/america" style={({isActive}) => (
                  isActive ? {color:'rgb(0, 76, 153)'} : {color:'#fff'}
                )}>America</NavLink>
              </Typography>

              <Typography>
                <NavLink to="/europe" style={({isActive}) => (
                  isActive ? {color:'rgb(0, 76, 153)'} : {color:'#fff'}
                )}>Europe</NavLink>
              </Typography>

              <Typography>
                <NavLink to="/asia" style={({isActive}) => (
                  isActive ? {color:'rgb(0, 76, 153)'} : {color:'#fff'}
                )}>Asia</NavLink>
              </Typography>

              <Typography>
                <NavLink to="/oceania" style={({isActive}) => (
                  isActive ? {color:'rgb(0, 76, 153)'} : {color:'#fff'}
                )}>Oceania</NavLink>
              </Typography>

              <Typography>
                <NavLink to="/search" style={({isActive}) => (
                  isActive ? {color:lime[400]} : {color:'#fff'}
                )}>Search</NavLink>
              </Typography>


        </Toolbar>
        
        <Box sx={{display:'flex',alignItems:'center'}}>
           <Typography sx={{color:'orange'}} >{user?.name }</Typography>
           <Button 
              sx={{marginLeft:'14px'}} 
              variant="outlined" 
              color="secondary"
              onClick={handleButtonLogout}
              >
              <span style={{marginRight:'4px'}} >Logout</span>
              <LogoutIcon/>
            </Button>
        </Box>

        </Container>
    </AppBar>
  )
}
