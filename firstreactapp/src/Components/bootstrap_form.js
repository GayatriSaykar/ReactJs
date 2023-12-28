import { useState } from "react";

export default function Bootstrap_form(){
    const[uid,setUid]=useState("");
    const[pwd,setPwd]=useState("");
    const[submitted,setSubmitted]=useState(false);

    function submitData(e){
        e.preventDefault();
        console.log(uid);
        console.log(pwd);
        setSubmitted(true);
    }

    return(
        <div className="container">
        <form>
        <div>
        <h1>Login Form</h1>
        </div>
        <div className="mt-3 mb-3">
        <label className="form-label">Enter uid</label>
        <input type="text" name="uid" value={uid} className="form-control" onChange={(e)=>{
            setUid(e.target.value)
        }}/>
        </div>
        <div className="mt-3 mb-3">
        <label className="form-label">Enter Password</label>
        <input type="password" name="pwd" value={pwd} className="form-control" onChange={(e)=>{
            setPwd(e.target.value)
        }}/>
        </div>
        <div>
        <button type="submit" className="btn btn-primary" value="login" onClick={submitData}>Login</button>
        </div>
        </form>
        <div style={{display:submitted?"Block":"None"}}>
        <h1>Welcome {uid}</h1>
        </div>
        </div>
    )
}