import ArrayFun from "./Components/Array_Fun";
import ClassComp from "./Components/ClassComp";
import FunComp from "./Components/FunComp";
import Header from "./Components/Header";
import { One, Two, Three } from "./Components/Multiple_Comp";
import Table from "./Components/Table";
import Factorial from "./Components/factorial_using_props";
import ArrayNameDisplay from "./Components/Array_props";
import Emp from "./Components/empInfo_props";
import Stateful from "./Components/cls_state";
import Stateless from "./Components/fun_hook";
import TextParagraph from "./Components/color_fun";
import Counts from "./Components/Counts";
import ImageFun from "./Components/Image_fun";
import AcceptFun from "./Components/accept_append_fun";
import Bootstrap_form from "./Components/bootstrap_form";
import UsingReducer from "./Components/bootstrap_form_reducer";
import Registration from "./Components/Reg_Form";
import Timer from "./Components/Timer";
import {Link,Route,Routes } from "react-router-dom";
import WrongUrl from "./Components/Wrongurl";
import LocalFun from "./Components/local_Fun";
import { useNavigate } from "react-router-dom";
import FetchFun from "./Components/fetchFun";
import RestApi from "./Components/fetchFun";
import EmpForm from "./Components/EmpForm";
import Footer from "./Components/Footer";
import Nav from "./Components/nav";
import About from "./Components/About";


function App() {
  let navigate=useNavigate();
  return (
    <div className="App">
     {/* <Table /> 
      <ArrayFun /> 
    <Header /> 
    <One />
    <Two />
    <Three /> 
     <Factorial num="5"/> 
    <ArrayNameDisplay names={["Gayu","Abhi","Khushi","Mayu","Raj","Siya","Viki"]} />  */}
    {/* <Emp emps={[{empid:101,ename:"Gayatri",salary:40000},{empid:102,ename:"Shivani",salary:50000},{empid:103,ename:"Raj",salary:50604},{empid:104,ename:"Sara",salary:45000}]} /> */}
    {/* <Stateful /> */}
    {/* <Stateless /> */}
    {/* <TextParagraph /> */}
    {/* <Counts /> */}
    {/* <ImageFun /> */}
    {/* <AcceptFun arr={["Gayatri","Shivani","Sanskar","Raj"]} /> */}
    {/* <Bootstrap_form />  */}
    {/* <UsingReducer /> */}
    {/* <Registration /> */}
    
    
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
     
    

    <Routes>
    {/* <Route path="/" element={<Nav />} /> */}
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Bootstrap_form />} />
    <Route path="/image" element={<ImageFun />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/Header" element={<Header />} />
    <Route path="/localname" element={<LocalFun />} />
    <Route path="/fetchfun" element={<FetchFun />} />
    <Route path="/textpara" element={<TextParagraph />} />
    <Route path="*" element={<WrongUrl />} />
    <Route path="/empform" element={<EmpForm />} />
    <Route path="/footer" element={<Footer />} />
    </Routes>
    
    </div> 
  );
}

export default App;
