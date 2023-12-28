import { useReducer, useState } from "react";

export default function Registration(){
   

    const init={
        emailid:'',
        pwd:'',
        gender:'',
        city:''
    }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'update':
                    return {...state,[action.field]:action.value}
            case 'reset':
                    return init;
        }
    }

    const[user,dispatch]=useReducer(reducer,init);
    const[submitted,setSubmitted]=useState(false);
   
    return(
        <div className="container">
            <form>
                <div>
                    <h1>Registration</h1>
                </div>
                <div className="col-md-3">
                    <label htmlFor="eid" className="form-label">Enter Email:</label>
                    <input type="email" className="form-control" name="eid" value={user.emailid} onChange={(e)=>{
                        dispatch({type:'update',field:'emailid',value:e.target.value})
                    }}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="pwd" className="form-label">Enter Password:</label>
                    <input type="password" className="form-control" name="pwd" value={user.pwd} 
                    onChange={(e)=>{
                        dispatch({type:'update',field:'pwd',value:e.target.value})
                    }} />
                </div>
                <div className="col-md-3">
                    <input type="radio" id="rd1" className="form-check input" />
                    <label htmlFor="r1" className="form-check-label">Male</label>
                    <input type="radio" id="rd1" className="form-check input" />
                    <label htmlFor="r1" className="form-check-label">Female</label>
                </div>
                <div>
                    <p>{JSON.stringify(user)}</p>
                </div>
            </form>
        </div>
    )
}