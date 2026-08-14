import '../styles/Navbar.css';
import logo from '../Assets/Components/Navbar/enmapfp.webp';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <img className="logo" src={logo} alt='Dream Jibakoma'></img>
            Enma Tsutarja
        </div>
    )
}
export default Navbar;