import {useState} from "react";

export default function ImageFun(){
    const[flag,changeFlag] = useState(true);
    return(
        <div>
            <img src="https://cdn.pixabay.com/photo/2023/08/28/20/36/gerbera-8220025_640.jpg" alt="image" style={{display:flag?"block":"none"}}/>
            <input type="checkbox" checked={flag} onClick={()=>{changeFlag(!flag)
            }}/>
        </div>
    )
}