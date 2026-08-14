import '../styles/components/Navbar.css';
import logo from '../Assets/Components/Navbar/enmapfp.webp';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className="logo" src={logo} alt='Dream Jibakoma'></img>
            Enma Tsutarja
        </div>
    )
}
export default Navbar;