function Table(){
    var num=6;
    var arr=[1,2,3,4,5,6,7,8,9,10];
    return (
        <table border="1">{
       arr.map((v)=>{
         return <tr><td>{num+"*"+v}</td>
         <td>{v*num}</td></tr> 
       })}
</table>
    )
}

export default Table;