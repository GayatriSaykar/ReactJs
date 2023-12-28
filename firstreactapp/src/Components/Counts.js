import {useState} from 'react';

export default function Counts(){
    const[cnt,setCnt]=useState(0);
    return(
        <div>
            Enter Number:
            <input type="text" name="c" value={cnt}/>
            <button type="button" value="btn" onClick={()=>{setCnt(cnt+1)}}>Increment</button>&nbsp;
            <button type="button" value="btn1" onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
            <p>Count: {cnt}</p>
        </div>
    )
}