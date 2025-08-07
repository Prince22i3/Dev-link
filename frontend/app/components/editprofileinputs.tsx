"use client"
import React, { useState } from "react"
import "../editprofile/editprofile.css"
import { UseFormRegister } from "react-hook-form"

interface editProfileProps {
    label: string
    input: string
    placeHolder?: string
    register: UseFormRegister<any>
    getValue?:(name:string) => any
}


const EditProfileInput: React.FC<editProfileProps> = (props) => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <div className="editProfileInputDiv">
            <div style={{ width: "8vw" }}><label>{props.label}</label></div>
            <div>{edit ?
                <input className="editProfileInputDivInt" type="text" placeholder={props.placeHolder} {...props.register(props.input)} /> :
                <div style={{ width: "17vw", textAlign:"center" }}>{props.getValue?.(props.input)??"N/A"}</div>}</div>
            <div>{edit?
            <button onClick={()=>setEdit(false)}>Done</button>:
            <button onClick={() => setEdit(true)}>Edit</button>
        }</div>
        </div>
    )
}


export default EditProfileInput;