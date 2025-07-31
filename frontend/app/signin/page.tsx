"use client"
import React, { useState,useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import './signin.css'

type Inputs = {
    username: string,
    password: string,
}

const SignIn: React.FC = () => {
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
        delay(2);
        console.log(data);
    }
    return (
        <div className="signin">
            <div><h1 style={{ textDecoration: "underline", marginBottom: "4vh" }}>SignIn</h1></div>
            {isSubmitting && <div style={{margin:"2rem"}}>Submitting...</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="int">Username: <input type="text" {...register("username", { required: { value: true, message: "This field cannot be empty" } })} /></div>
                {errors.username && <div>{errors.username.message}</div>}
                <div className="int">Password: <input type="text" {...register("password", { required: { value: true, message: "This field cannot be empty" } })} /></div>
                {errors.password && <div>{errors.password.message}</div>}
                <div className="submitSignin"><input disabled={isSubmitting} type="submit" value="SUBMIT" /></div>
            </form>
        </div>
    )
}

export default SignIn

console.log("Git tracking test");
