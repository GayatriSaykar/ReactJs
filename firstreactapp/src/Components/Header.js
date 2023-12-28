import pic from '../Images/rose.jpg';

import Time from '../Components/Time';

function Header(){
    let w=200;
    let h=200;
    return(
        <div>
        <h1>Welcome</h1>
        <img src={pic} alt="rose" width={w} height={h}/>
        <Time />
        </div>
    )
}

export default Header;