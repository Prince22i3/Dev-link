"use client"
import React,{useState} from "react"
import "./editprofile.css"
import { useForm, SubmitHandler } from "react-hook-form"
import EditProfileInput from "../components/editprofileinputs"

type Inputs = {
    name: string
    email: string
    github: string
    linkedln: string
    x: string
    instagram: string
    youtube: string
    languages: string
}

const EditProfile: React.FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try{
            const response = await fetch("http://localhost:3001/editprofile/",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                credentials:"include",
                body:JSON.stringify(data),
            });
            const res = await response.json();
            if(!response.ok) throw new Error("server responded with error"); 
            console.log(data, res);
        }
        catch(err){
            console.error("Submission error:", err);
        }
    }

    return (
        <div>
            <div className='editpfp'><div></div></div>
            <form onSubmit={handleSubmit(onSubmit)} className="editProfileInputDivForm">
                <div style={{marginBottom:"3vh"}}>
                    <div style={{textDecoration:"underline", marginBottom:"4vh", display:"flex", justifyContent:"space-between", alignItems:"center"}}><h2>Basic Info</h2><input style={{height:"4vh", width:"5vw"}} type="submit" /></div>
                    <EditProfileInput label="Name" input="name" placeHolder="Your Fullname" register={register} getValue={getValues}/>
                    <EditProfileInput label="Email" input="email" placeHolder="Your email" register={register} getValue={getValues}/>
                    <EditProfileInput label="Github" input="github" placeHolder="Your Github url" register={register} getValue={getValues}/>
                    <EditProfileInput label="Linkedln" input="linkedln" placeHolder="Your Linkedln url" register={register} getValue={getValues}/>
                    <EditProfileInput label="X" input="x" placeHolder="Your X url" register={register} getValue={getValues}/>
                    <EditProfileInput label="Instagram" input="instagram" placeHolder="Your Instagram url" register={register} getValue={getValues}/>
                    <EditProfileInput label="Youtube" input="youtube" placeHolder="Your Youtube url" register={register} getValue={getValues}/>
                </div>
                <div>
                    <div style={{textDecoration:"underline"}}><h2>Skills</h2></div>
                    <EditProfileInput label="Languages" input="languages" placeHolder="C, C++, Python, Java, Javascript, etc" register={register} getValue={getValues}/>
                    <EditProfileInput label="Interests" input="interests" placeHolder="Web Development, AI & ML, Data Science, etc" register={register} getValue={getValues}/>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;