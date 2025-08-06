import React from "react";
import Link from "next/link";

const Dropdown: React.FC = () => {
    return (
        <div>
            <div><Link href="http://localhost:3000/editprofile" style={{textDecoration:"none", color:"black"}}>Edit Profile</Link></div>
            <div>Projects</div>
            <br />
            <div>Premium</div>
            <div>About</div>
            <div>Log out</div>
        </div>
    )
}

export default Dropdown