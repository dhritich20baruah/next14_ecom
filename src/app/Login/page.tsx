"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios";
const jwt = require("jsonwebtoken")
// import { useRouter } from "next/router";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [display, setDisplay] = useState(false);
    // const router = useRouter()


    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const userObj = {
                email, password
            }
            const result = await axios.post('/api/auth', userObj)
            const data = result.data
            if(data.token){
                localStorage.setItem("token", data.token)
                alert('Sign In Successful')
                const auth = jwt.decode(data.token)
                // router.push('/')
            }
            else {
                alert("Please check email and password");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <p className="m-5 text-lg font-semibold">You are not logged in. Please log in to continue.</p>
            <div className="md:w-1/3 w-full mx-10 bg-gray-700 p-5 flex flex-col space-y-4">
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id="email" name="email" className="p-2 bg-white" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="pasword" className="text-white">Password</label>
                <input type="password" id="password" name="password" className="p-2 bg-white" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="p-2 bg-orange-600 text-white border-2 font-bold border-orange-600 hover:text-orange-600 hover:bg-white" onClick={handleSubmit}>LOG IN</button>
                <p className="text-white my-3">Not registered. <Link href="/Register" className="text-blue-300 hover:text-orange-400">Click here</Link> to sign up.</p>
            </div>
        </div>
        </>
    )
}