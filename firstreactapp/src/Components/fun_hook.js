import {useState} from 'react';

export default function Stateless() {
    const[name,setName]=useState("Gayu");
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={()=>{
                setName("Abhi")}}>ChangeName</button>
        </div>
    )
}