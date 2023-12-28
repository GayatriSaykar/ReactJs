import {Link,Route,Routes } from "react-router-dom";

export default function Nav(){
    return(
    <nav className="navbar text-white bg-info">
    <Link to="/about" className="nav-link">About</Link>
    <Link to="/login" className="nav-link">Login</Link>
    <Link to="/image"className="nav-link" >Image</Link>
    <Link to="/registration" className="nav-link" >Registration</Link>
    <Link to="/timer" className="nav-link">Timer</Link>
    <Link to="/localname" className="nav-link">Name</Link>
    <Link to="/fetchfun" className="nav-link">Emp</Link>
    <Link to="/textpara" className="nav-link">ColorText</Link>
    <Link to="/empform" className="nav-link">EmpForm</Link>
    </nav>
    )
}