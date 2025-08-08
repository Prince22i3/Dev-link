import {cookies} from "next/headers"
const jwt = require("jsonwebtoken");
import {redirect} from "next/navigation"
import Profile from "./page"

export default async function ProfileLayout({children}:{children: React.ReactNode}){
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if(!token){
        redirect("/login");
    }
    try{
        
        const user = jwt.verify(token, process.env.JWT_SECRET!);
        return <Profile user={user}/>;
    }
    catch(err){
        redirect("/login")
    }
}