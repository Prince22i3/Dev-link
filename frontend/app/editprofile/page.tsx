"use client"
import React,{useState} from "react"
import "./editprofile.css"
import { useForm, SubmitHandler } from "react-hook-form"
import EditProfileInput from "../components/editprofileinputs"


type Inputs = {
    name: string
    username: string
    gender: string
    country: string
    birthday: string
    bio: string
    website: string
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
        console.log(data);
    }

    return (
        <div>
            <div className='editpfp'><div></div></div>
            <form onSubmit={handleSubmit(onSubmit)} className="editProfileInputDivForm">
                <div style={{marginBottom:"3vh"}}>
                    <div style={{textDecoration:"underline", marginBottom:"4vh", display:"flex", justifyContent:"space-between", alignItems:"center"}}><h2>Basic Info</h2><input style={{height:"4vh", width:"5vw"}} type="submit" /></div>
                    <EditProfileInput label="Name" input="name" placeHolder="Your Fullname" register={register} getValue={getValues}/>
                    <EditProfileInput label="Username" input="username" placeHolder="Your username" register={register} />
                    <EditProfileInput label="Gender" input="gender" placeHolder="Male/Female" register={register} />
                    <EditProfileInput label="Country" input="country" placeHolder="India" register={register} />
                    <EditProfileInput label="Birthday" input="birthday" placeHolder="3-3-2005" register={register} />
                    <EditProfileInput label="Bio" input="bio" placeHolder="Tell us about yourself (interest, experience, etc)" register={register} />
                    <EditProfileInput label="Website" input="website" placeHolder="Your website, blog, portfolio, ect" register={register} />
                    <EditProfileInput label="Github" input="github" placeHolder="Your Github url" register={register} />
                    <EditProfileInput label="Linkedln" input="linkedln" placeHolder="Your Linkedln url" register={register} />
                    <EditProfileInput label="X" input="x" placeHolder="Your X url" register={register} />
                    <EditProfileInput label="Instagram" input="instagram" placeHolder="Your Instagram url" register={register} />
                    <EditProfileInput label="Youtube" input="youtube" placeHolder="Your Youtube url" register={register} />
                </div>
                <div>
                    <div style={{textDecoration:"underline"}}><h2>Skills</h2></div>
                    <EditProfileInput label="Languages" input="languages" placeHolder="C, C++, Python, Java, Javascript, etc" register={register}/>
                    <EditProfileInput label="Interests" input="interests" placeHolder="Web Development, AI & ML, Data Science, etc" register={register}/>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;