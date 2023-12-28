import {useState} from "react";

export default function TextParagraph(){
    const[cl,setCl]=useState("Red");
    return(
        <div>
            <p onClick={() => {setCl("Blue")}} style={{color:cl}}>Hey I am Gayatri.I am knowit student</p>
        </div>
    )
}