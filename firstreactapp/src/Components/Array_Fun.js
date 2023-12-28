function ArrayFun(){
    var names=["Gayu","Mau","Abhi","Piyu","Viki"];
    return (
        <div>
            <h1>Welcome</h1>
            <ul>
                {
                    names.map((v) => {
                    return <li key={v}>{v}</li>})
                }
            </ul>
        </div>
    )
}

export default ArrayFun;