import { useReducer, useState } from "react";

export default function UsingReducer(){
    const init={
        uid:"",
        pwd:""
    }

    const reducer= (state,action) => {
        switch(action.type){
            case 'update':
                return {...state,[action.field]:action.value}
            case 'reset':
                return init;
        }
    }

    const[user,dispatch]=useReducer(reducer,init);
    const[submitted,setSubmitted]=useState(false);


    const submitData = (e) => {
        console.log(JSON.stringify(user));
        e.preventDefault();
        setSubmitted(true);
    }

    return(
        <div className="container">
            <form>
            <div>
                <h1>Login Form</h1>
            </div>
            <div>
            <label htmlFor="uid" className="form-label">Enter UserId:</label>
            <input type="text" className="form-control" name="uid" value={user.uid} onChange={(e)=>{
                dispatch({type:'update',field:'uid',value:e.target.value})
            }} />
            </div>
            <label htmlFor="pwd" className="form-label">Enter Pwd:</label>
            <input type="password" className="form-control" name="pwd" value={user.pwd} onChange={(e)=>{
                dispatch({type:'update',field:'pwd',value:e.target.value})
            }} />
            <div>
            <div>
            <input type="submit" value="Insert" className="btn btn-primary" onClick={(e)=>{
                submitData(e)
            }} />
            </div>
            </div>
            </form>
            <p> {JSON.stringify(user)} </p>
            <div style={{display:submitted?"Block":"None", color:"Pink", textShadow:"inherit"}}>
            <h3>Welcome {user.uid}</h3>
            </div>
        </div>
    )

}