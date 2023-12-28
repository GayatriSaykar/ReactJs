import { useEffect, useState } from "react";


export default function Timer(){
    const[cdate,setCdate]=useState(new Date());

    useEffect(() => {
        console.log("Mounted");
        const timer=setInterval(()=>{
            setCdate(new Date())},1000)
    },[])

    return(
        <div>
            <p>{cdate.getHours()+" "+cdate.getMinutes()+" "+cdate.getSeconds()}</p>
        </div>
    )
}