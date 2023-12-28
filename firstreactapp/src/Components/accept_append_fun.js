import {useState} from "react";

export default function AcceptFun(props)
{
    const [names,setNames]=useState(props.arr);
    const [vale,setVale]=useState("");
    console.log(names);
    console.log(props.arr);
    return(
        <div>
        <ul>
            {
                names.map((v)=>{
                    return <li key={v}>{v}</li>
                })
            }
        </ul>
        Enter Name: <input type="text" name="vale" value={vale} onChange={(e)=>{
            setVale(e.target.value) 
        }} />
        <br />
        <button type="button" value="Add" onClick={()=>{setNames(names.concat([vale]))}}>ADD</button> 
       </div>
    )
}

