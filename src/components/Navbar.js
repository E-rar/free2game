import logo from '../img/Logo.png'
import search from '../img/Search.png'
const Navbar = (props) => {
    return ( 
        <nav className="flex transparent">
            <img src={logo} alt="Free2Game" style={{transform:props.isOpen?'translateX(10vw)' : 'translateX(0px)'}}/>
            <input type="search" id="search" src={search} alt="Free2Game"/>
        </nav>
     );
}
 
export default Navbar;