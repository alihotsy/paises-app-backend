import axios from 'axios'
import { UserForm } from '../interfaces/Login'


export const axiosPost = async({username,password}:UserForm):Promise<void> => {
    await axios({
        method:'post',
        url: 'http://localhost:8090/login/create',
        data:{
          username,
          password
        }
      })
}
