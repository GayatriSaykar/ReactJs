export default function ArrayNameDisplay(props) 
{    
   console.log(props.names);
    return (
        <ul>
        {
        props.names.map((v)=>{
          return  <li>{v}</li>
        })
    }
        </ul>
    )
}