import { useReducer, useState, useEffect } from "react"

const init={
    empno:0,
    ename:" ",
    job:" ",
    mgr:0,
    hiredate:" ",
    sal:0,
    comm:0,
    deptno:0
}

const reducer=(state,action) => {
    switch(action.type) {
        case 'update':
            return {...state,[action.field]:action.value}
        case 'reset':
            return init;
    }
}

export default function EmpForm(){
    const[emp,dispatch]=useReducer(reducer,init);
    const[msg,setMsg] = useState("abc")
    const[insertMsg, setInsertMsg] = useState("")

    useEffect(()=>{
        setMsg(localStorage.getItem("msg"))
    },[]);

    const submitData = (e) => {
        console.log(JSON.stringify(emp));
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                empno:emp.empno,
                ename:emp.ename,
                job:emp.job,
                mgr:emp.mgr,
                hiredate:emp.hiredate,
                sal:emp.sal,
                comm:emp.comm,
                deptno:emp.deptno
            })
        }

    fetch("http://localhost:9000/insertemps",reqOptions)
        .then(resp => resp.text())
        .then(data => setInsertMsg(data))

    }

    return(
        <div className="container">
        <form className="form-control">
        <h1>EMP FORM</h1>
       
     
           <label htmlFor="empno" className="form-label">Enter ENO:</label>
            <input type="number" name="empno" id="empno" className="form-control" value={emp.empno} onChange={(e)=>{
                dispatch({type:'update',field:'empno',value:e.target.value})
            }} />
      

      
        <label htmlFor="ename" className="form-label">Enter ENAME:</label>
            <input type="text" name="ename" id="ename" value={emp.ename} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'ename',value:e.target.value})
            }} />
        
      
             <label htmlFor="job" className="form-label">Enter JOB:</label>
            <input type="text" name="job" id="job" value={emp.job} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'job',value:e.target.value})
            }} />
       
            <label htmlFor="mgr" className="form-label">Enter MGR:</label>
            <input type="number" name="mgr" id="mgr" value={emp.mgr} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'mgr',value:e.target.value})
            }} />
      
            <label htmlFor="hiredate" className="form-label">Enter HIREDATE:</label>
            <input type="date" name="hirdate" id="hiredate" value={emp.hiredate} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'hiredate',value:e.target.value})
            }} />
        
            <label htmlFor="sal" className="form-label">Enter SAL:</label>
            <input type="number" name="sal" id="sal" value={emp.sal} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'sal',value:e.target.value})
            }} />
    
            <label htmlFor="comm" className="form-label">Enter COMM:</label>
            <input type="number" name="comm" id="comm" value={emp.comm} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'comm',value:e.target.value})
            }} />
        
             <label htmlFor="deptno" className="form-label">Enter DEPTNO:</label>
            <input type="number" name="deptno" id="deptno" value={emp.deptno} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'deptno',value:e.target.value})
            }} />
       
            <input type="submit" value="Insert" className="btn btn-primary" onClick={(e)=>{submitData(e)}} />&nbsp;
            <input type="reset" value="Clear" className="btn btn-primary" onClick={()=>{dispatch({type:"reset"})}} />
     
        </form>
        <p> {JSON.stringify(emp)} </p>
        <p> {insertMsg} </p>
        <table>
            <tr>
                <th>EMPNO</th>
                <th>ENAME</th>
                <th>JOB</th>
                <th>MGR</th>
                <th>HIREDATE</th>
                <th>SAL</th>
                <th>COMM</th>
                <th>DEPTNO</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        </div>
    )
}