import { useReducer } from "react"

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

export default function EmpFormReg(){
    const[emp,dispatch]=useReducer(reducer,init);

    const submitData = (e) => {
        console.log(JSON.stringify(emp));
        e.preventDefault();
    }

    return(
        <div className="container">
        <form>
        <div className="col-md-9">
        <h1>EMP FORM</h1>
        </div>
        <div className="col-md-9">
           <label htmlFor="eid" className="form-label">Enter ENO:</label>
            <input type="number" name="empno" className="form-control" value={emp.empno} onChange={(e)=>{
                dispatch({type:'update',field:'empno',value:e.target.value})
            }} />
        </div>

        <div className="col-md-9">
        <label htmlFor="eid" className="form-label">Enter ENAME:</label>
            <input type="text" name="ename" value={emp.ename} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'ename',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
             <label htmlFor="eid" className="form-label">Enter JOB:</label>
            <input type="text" name="job" value={emp.job} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'job',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
            <label htmlFor="eid" className="form-label">Enter MGR:</label>
            <input type="number" name="mgr" value={emp.mgr} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'mgr',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
            <label htmlFor="eid" className="form-label">Enter HIREDATE:</label>
            <input type="date" name="hirdate" value={emp.hiredate} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'hiredate',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
            <label htmlFor="eid" className="form-label">Enter SAL:</label>
            <input type="number" name="sal" value={emp.sal} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'sal',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
            <label htmlFor="eid" className="form-label">Enter COMM:</label>
            <input type="number" name="comm" value={emp.comm} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'comm',value:e.target.value})
            }} />
        </div>
        <div className="col-md-9">
             <label htmlFor="eid" className="form-label">Enter DEPTNO:</label>
            <input type="number" name="deptno" value={emp.deptno} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'deptno',value:e.target.value})
            }} />
        </div>

        <div className="col-md-9">
            <input type="submit" value="Insert" onClick={(e)=>{submitData(e)}} />
            <input type="reset" value="Clear"  onClick={()=>{dispatch({type:"reset"})}} />
        </div>
        </form>
        </div>
    )
}