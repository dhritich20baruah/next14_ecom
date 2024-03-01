"use client"
import { useEffect, useState } from "react"

export default function CustomerDashboard(){
    const [token, setToken] = useState('')

    useEffect(()=>{
        if(typeof window !== "undefined"){
        const item = localStorage.getItem("token") as string
        setToken(item)      
        console.log(item, "token=",token)  
    }
    }, [])

    return(        
        <div className="">
     
        </div>
    )
}