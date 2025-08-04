"use client"
import React,{useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import './login.css'

type loginInputs = {
    username:string,
    password:string,
}

const Login:React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<boolean | null>(null);

    const{
        register,
        handleSubmit,
        formState:{errors, isSubmitting},
    } = useForm<loginInputs>();

    const delay = (s:number) => {
        return new Promise <void> ((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },s*1000)
        })
    }

    const onSubmit:SubmitHandler<loginInputs> = async (data) => {
        try{
            await delay(2);
            const response = await fetch("http://localhost:3001/login",{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            let res = await response.json();
            if(!response.ok){
                setMessageType(false);
                setMessage(res.msg);
            }
            else{
                setMessageType(true);
                setMessage("You are successfully logged in");
            }
        }
        catch (error) {
            setMessage("An internal server error occured");
            console.log("Error", error);
        }
    }

    return (
    <div>
        <form className='loginPage' onSubmit={handleSubmit(onSubmit)}>
            {message&&<div style={{color:messageType==true?"green":"red"}}>{message}</div>}
            {isSubmitting&&<div>Submitting...</div>}
            <div><h1 style={{textDecoration:"underline"}}>Login</h1></div>
            <div className='loginInt'>Username: <input type="text" {...register("username",{required:{value:true,message:"This field cannot be empty"}})} /></div>
            {errors.username&&<div className='err'>{errors.username.message}</div>}
            <div className='loginInt'>Password: <input type="password" {...register("password",{required:{value:true,message:"This field cannot be empty"}})} /></div>
            {errors.password&&<div className='err'>{errors.password.message}</div>}
            <input className='submitLogin' disabled={isSubmitting} type="submit" value="SUBMIT"/>
        </form>
    </div>
    )
}

export default Login