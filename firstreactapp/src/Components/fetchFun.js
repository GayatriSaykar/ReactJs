import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function FetchFun()
{
    const[emps,setEmps]=useState([]);
    let navigate = useNavigate();
    
    useEffect(()=>{
         fetch("http://localhost:9000/emps")
        .then(resp => resp.json())
        .then(data=>setEmps(data));
    },[]);

    return (
        <div>
            <h1> Emp data </h1>
            <table border="1" className="table table-bordered">
                {
                   emps.map((v)=>{
                        return (
                            <tr>
                                <td>{v.empno}</td>
                                <td>{v.ename}</td>
                                <td>{v.job}</td>
                                <td>{v.mgr}</td>
                                <td>{v.hiredate}</td>
                                <td>{v.sal}</td>
                                <td>{v.comm}</td>
                                <td>{v.deptno}</td>
                                <td>  <a onClick={()=>{navigate('/editemp',{state: v})}}>EDIT</a></td>
                                <td>  <a onClick={()=>{navigate('/deleteemp',{state: v})}}>DELETE</a></td>
                            </tr>
                        )
                   }) 
                }
            </table>
            
        </div>
    )
}


 // fetch("http://jsonplaceholder.typicode.com/users")


  {/* <td>{v.name}</td>
                                <td>{v.username}</td>
                                <td>{v.email}</td>
                                <td>{v.zipcode}</td> */}