import {useState} from 'react';

import {Box, TextField, Button, styled, Typography} from '@mui/material'
// import { Component } from 'react';
import  {API } from '../service/api.js';

const Component = styled(Box)`
    width: 400px;    
    margin: auto; 
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 300,
    height: 150,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
})
 
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    &>div,&>Button,&>p{
        margin-top: 20px;
    }
    
`

const Loginbtn = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`
const CreateAcc = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const Topo =styled(Typography)`
    color: #878787;
    font-size: 16px;
`

// to conditionally open the wrappers


const signupInitialValues = {
    name: '',
    username:'',
    password:''
}

const Login = () => {

    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

    const [account, toggleAccount] = useState('login');
    const [signup,setSignup] =useState(signupInitialValues);

    const toggle = () =>{
        account=== 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    const onInputChange = (e)=>{
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser= async ()=>{
        await API.userSignup(signup);
    }
    

    return (
        <Component>
            <Box>
                <Image src = {imageURL} alt="ImageError"/>
                {   
                    account==='login' ?

                        <Wrapper>
                            <TextField variant='standard' label='Username'/> 
                            <TextField variant='standard'label='Password'/>
                            <Loginbtn variant='contained'>Login</Loginbtn>
                            <Topo style={{textAlign: 'center'}}>OR</Topo>
                            <CreateAcc onClick={()=>toggle()}>Create Account</CreateAcc>
                        </Wrapper>


                    :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='name' label='Name'/> 
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name ='username' label='Enter Username'/> 
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='password' label='Enter Password'/>
                            <CreateAcc onClick={()=> signupUser()}>Signup</CreateAcc>
                            <Topo style={{textAlign: 'center'}}>OR</Topo>
                            <Loginbtn variant='contained' onClick={()=>toggle()}>Got to Login</Loginbtn>
                        </Wrapper>
                }
            </Box>
        </Component>
    );
};

// it is a  login component we are goin to export it from here 

export default Login;

// we will now use Material UI

// WE now to work on the backend of the prooject so we need to start from the 2 nd video of the tutorial  
