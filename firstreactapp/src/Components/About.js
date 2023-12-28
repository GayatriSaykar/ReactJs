import { useNavigate } from "react-router-dom"
import Header from "./Header"


export default function About() {
    let navigate=useNavigate();
    return(
        <div style={{color:"pink"}}>
    <h4>Welcome</h4>
    <button type="button" className="btn btn-success" onClick={()=>{
        navigate('/Header')
    }} >Move to Header</button>
    </div>
    )
}