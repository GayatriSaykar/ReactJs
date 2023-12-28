import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import TextParagraph from "./color_fun";

export default function LocalFun(){
    const[name,setName]=useState("");
    let navigate = useNavigate()
    localStorage.setItem("name",name)
     

    return(
        <div className="col-md-3">
            <div className="col-md-3">
                Enter user:
                <input type="text" name="name" />
            </div>
            <div className="w-100">
                <button type="button" className="btn btn-primary" onClick={()=>{navigate('/textpara') }}>
                Move to TextParagraph</button>
            </div>
            
            <h2>{name}</h2>
        </div>
    )
}

