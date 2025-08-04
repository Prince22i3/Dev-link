"use client"
import React, { useState } from 'react'
import './profile.css'
import MenuIcon from '../img/menu'
import Dropdown from '../components/dropdown'

const Profile: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='profilePage'>
            <div className='profileContent'>
                <div className='profileTop'>
                    <div className='profileTopLeft'>
                        <div style={{ fontSize: "22px" }}>Welcome, Mighty</div>
                        <div style={{ fontSize: "12px" }}>Mon, 04 August 2025</div>
                    </div>
                    <div className='profileTopRight'>
                        <div><input style={{ width: "17vw", backgroundColor: "#cccccc", border: "none" }} type="text" /></div>
                        <div><h2>DevLink</h2></div>
                        <div onClick={() => { open == true ? setOpen(false) : setOpen(true) }} style={{ display: "flex", alignItems: "center", cursor:"pointer" }}><MenuIcon /></div>
                    </div>
                </div>

                {open &&<div className='dropdown'><Dropdown/></div>}

                <div className='profileBody'>
                    <div className='profileBodyTop'>
                        <div className='profileBodyTopLeft'>
                            <div className='pfp'></div>
                            <div>
                                <div style={{ fontSize: '18px', marginBottom: '10px' }}>Prince Raj Sarangi</div>
                                <div style={{ fontSize: '10px' }}>mighty.raj2213@gmail.com</div>
                            </div>
                        </div>
                        <div className='follow'>
                            <div>
                                <div>0</div>
                                <div>projects</div>
                            </div>
                            <div>
                                <div>0</div>
                                <div>followers</div>
                            </div>
                            <div>
                                <div>0</div>
                                <div>following</div>
                            </div>
                        </div>
                    </div>

                    <div className='bodyContent'></div> //left here

                </div>
            </div>
        </div>
    )
}

export default Profile