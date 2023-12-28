export default function Emp(props)
{
    console.log(props.emps);
    return(
        <div>
            <table border="1">
            <tr>
                <th>EmpId</th>
                <th>Ename</th>
                <th>Salary</th>
            </tr>{
                props.emps.map((v)=>{
                return(
                <tr>
                    <td key={v}>{v.empid}</td>
                    <td key={v}>{v.ename}</td>
                    <td key={v}>{v.salary}</td>
                </tr>
                )
            })}
        
            </table>
        </div>
    )
}