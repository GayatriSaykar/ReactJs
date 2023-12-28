export default function Factorial(props)
{
    var fact=1;
    for(var i=1;i<=props.num;i++)
    {
        fact=fact*i;
    }
   return <h5>Factorial is: {fact}</h5>
}