import { Alert, Button, Card, CardContent, CardHeader, Container, Grid , Typography } from '@mui/material'
import { grey, lightBlue, lightGreen, orange } from '@mui/material/colors'
import { Box } from '@mui/system'
import { Input } from '../components/Input'
import { useForms } from '../hooks/useForms'



export const Login = () => {

  const {
    isLogin,
    login,
    accountAlreadyExists,
    confirmPasswordError,
    username,
    password,
    confirmPassword,
    setInputValues,
    navigate,
    handleInputChange,
    handleCreateButton,
    handleLoginButton
   } = useForms({
      username:'',
      password:'',
      confirmPassword:''
   })


  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <Card sx={{background: isLogin ? grey[300] : grey[700]}}>
            <CardHeader title={isLogin ? 'Login' : 'Create an account'} titleTypographyProps={{
              textAlign:'center',
              fontSize: isLogin ? '34px' : '25px',
              color: isLogin ? orange['A400'] : lightGreen[600]
            }}/>
            <CardContent>
               <form>
                  <Input
                  handleInputChange={handleInputChange}
                  value={username}
                  name="username"
                  label="Username"
                  sx={{mb:'15px'}}
                  type="text"
                  color={isLogin ? '#000' : '#fff'}
                  />
                  <Input
                   handleInputChange={handleInputChange}
                   value={password}
                   name="password"
                   label="Password"
                   sx={{mb:'15px'}}
                   type="password"
                   color={isLogin ? '#000' : '#fff'}
                  />
                  {
                    !isLogin 
                     && <Input
                     handleInputChange={handleInputChange}
                     value={confirmPassword}
                     name="confirmPassword"
                     label="Confirm password"
                     sx={{mb:'21px'}}
                     type="password"
                     color={isLogin ? '#000' : '#fff'}
                    />
                  }
                  {
                    isLogin 
                    ?
                      <Button 
                      variant="contained"
                      fullWidth
                      style={{background:orange['A400'],marginBottom:'9px'}}
                      onClick={handleLoginButton}
                      disabled={!username || !password}
                      >
                        Accept
                    </Button>
                    :
                    <Button 
                    variant="contained"
                    fullWidth
                    style={{background:lightGreen[600],marginBottom:'9px'}}
                    type="submit"
                    disabled={
                      username.length <= 4 ||
                      !username || password.length <= 7 
                      || !username || !confirmPassword
                    }
                    onClick={handleCreateButton}
                    >
                      Create
                    </Button>
                  }
                  <Box>
                    <Typography>
                      {
                       isLogin && <span 
                          style={{
                            color:lightBlue['A700'],
                            textDecoration:'underline',
                            cursor:'pointer'
                          }}
                          onClick={() => {
                            setInputValues({
                              username:'',
                              password:'',
                              confirmPassword:''
                            })
                            navigate('/create');
                          }}
                        >
                          Create an account
                        </span>
                      }

                    </Typography>
                  </Box>
                  
               </form>
              </CardContent>
          </Card>
          <Alert variant='filled' severity='error' sx={{
            mt:'14px', 
            display: confirmPasswordError ? '' : 'none' 
          }}>
          Both passwords must match
          </Alert>
          <Alert variant='filled' severity='error' sx={{
            mt:'14px', 
            display: accountAlreadyExists ? '' : 'none' 
          }}>
          This username already exists
          </Alert>
          <Alert variant='filled' severity='error' sx={{
            mt:'14px', 
            display: login ? '' : 'none' 
          }}>
          Username or Password invalid
          </Alert>
        </Grid>
      </Grid>
    </Container>
  )
}
