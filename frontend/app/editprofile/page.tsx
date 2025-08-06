"use client"
import React,{useState} from "react"
import "./editprofile.css"
import {useForm, SubmitHandler} from "react-hook-form"

 type Inputs = {
    fullName:string
 }

const EditProfile:React.FC = () => {
    const [fullname, setFullname] = useState<string|null>(null);
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<Inputs>()

    const onSubmit:SubmitHandler<Inputs> = async (data) =>{
        console.log(data);
        setFullname(data.fullName);

        console.log(fullname);
    }

    return (
        <div>
            <div className='editpfp'><div></div></div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fullName">
                <label>Full Name</label>
                <input type="text" {...register("fullName",{required:{value:true,message:"This field cannot be empty"}})}/>
            </div>
            <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default EditProfile;