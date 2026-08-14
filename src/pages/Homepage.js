import '../styles/Homepage.css';
import image1 from '../Assets/Pages/Homepage/enmadreamjibakoma.webp';

const Homepage = () => {
    return (
        <div className="Homepage">
            Hi! I'm a cute girl Enma!
            <p>Here look at me!</p>
            <img className='image1' src={image1} alt='Dream Jibakoma'></img>
            <caption>Image drawn by Seavalanche Vesnea.</caption>
        </div>
    )
}
export default Homepage;