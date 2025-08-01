"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link";
import './signin.css'

type Inputs = {
    username: string,
    password: string,
}

const SignIn: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<boolean | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<Inputs>();

    const delay = (s: number) => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, s * 1000)
        })
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await delay(2);
            const response = await fetch("http://localhost:3001", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            let res = await response.json();
            if (!response.ok) {
                setMessageType(false)
                setMessage(res.msg)
            }
            if (response.status === 200) {
                setMessageType(true)
                setMessage("User successfully created!");
            }
        }
        catch (error) {
            setMessage("An internal server error occured");
            console.log("Error", error);
        }
    }
    return (
        <div className="signin">
            {message && <div style={{ color: messageType ? "green" : "red", margin: "2vh" }}>{message}</div>}
            {messageType ?
                <div className="redirectLoginButton"><Link style={{ textDecoration: "none", color: "white" }} href="/login">LogIn</Link></div> :
                <div className="signinForm">
                    <div><h1 style={{ textDecoration: "underline", marginBottom: "4vh" }}>SignIn</h1></div>
                    {isSubmitting && <div style={{ margin: "2rem" }}>Submitting...</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="int">Username: <input type="text" {...register("username", { required: { value: true, message: "This field cannot be empty" } })} /></div>
                        {errors.username && <div>{errors.username.message}</div>}
                        <div className="int">Password: <input type="text" {...register("password", { required: { value: true, message: "This field cannot be empty" } })} /></div>
                        {errors.password && <div>{errors.password.message}</div>}
                        <div className="submitSignin"><input disabled={isSubmitting} type="submit" value="SUBMIT" /></div>
                    </form>
                </div>
            }
        </div>
    )
}

export default SignIn
