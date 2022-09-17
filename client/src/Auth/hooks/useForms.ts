import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { axiosPost } from "../helpers/axiosPost";
import { UserForm } from "../interfaces/Login";


export const useForms = (initialValues:UserForm) => {
    const { login } = useContext(GlobalContext);

    const [isLogin, setIsLogin] = useState<boolean>(true);
  
  
    const [errors, setErrors] = useState({
       login:false,
       confirmPasswordError:false,
       accountAlreadyExists:false
    });
    
    const [inputValues, setInputValues] = useState<UserForm>(initialValues);
    const navigate = useNavigate();
    const { pathname } = useLocation();
  
    useEffect(() => {
      setErrors({
        login:false,
        confirmPasswordError:false,
        accountAlreadyExists:false,
      })
      if(pathname === '/login') {
         setIsLogin(true);
         setInputValues({
          username:'',
          password:'',
          confirmPassword:''
        })
      } else {
        setIsLogin(false)
      }
    },[pathname])
  
  
    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
          setInputValues({
          ...inputValues,
          [target.name]: target.value
          })
    }
  
    const handleCreateButton = async(e:FormEvent) => {
      e.preventDefault();
  
      try {
        const { password, confirmPassword } = inputValues;
        if(password !== confirmPassword){
          setErrors({
            ...errors,
            confirmPasswordError:true
          })
          return;
        }
        setErrors({
          ...errors,
          confirmPasswordError:false
        })
    
        await axiosPost(inputValues);
        navigate('/login')
       
        
      } catch (error) {
        setErrors({
          ...errors,
          accountAlreadyExists:true,
          confirmPasswordError:false
        })
      }
  
      
    }
  
    const handleLoginButton = async(e:FormEvent) => {
       e.preventDefault();
       const lastPath:string = localStorage.getItem('lastPath') || '';

        try {
          await axios.get(`http://localhost:8090/users/${inputValues.username}/${inputValues.password}`);
          
          login(inputValues.username);
          navigate(lastPath);
          
        } catch (error) {
          setErrors({
            ...errors,
            login:true
           })
        }

        
      }
      
      return {
        setIsLogin,
        isLogin,
        ...errors,
        setErrors,
        ...inputValues,
        setInputValues,
        navigate,
        handleInputChange,
        handleCreateButton,
        handleLoginButton
      }
    
    
}
