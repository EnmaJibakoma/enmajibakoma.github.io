// import { Link } from 'react-router-dom';
import ImageFullscreen from '../components/ImageFullscreen';
import '../styles/Homepage.css';
import image1 from '../Assets/Pages/Homepage/enmadreamjibakoma.webp';
import pfp1 from '../Assets/Pages/Homepage/dream-jibakoma-pfp.webp';
import pfp2 from '../Assets/Pages/Homepage/princess-kimiko-pfp.webp';

const Homepage = () => {
    return (
        <div className="homepage">
            Hello I am Enma, i also want to thank my little sister Vesnea!
            <p>Here look at me!</p>
            <ImageFullscreen
                className="image1"
                src={image1}
                alt='Dream Jibakoma'
            />
            <caption>Image drawn by Seavalanche Vesnea.</caption>
            <div className='divider' />
            My Socials!
            <ul className='socials'>
                <li>
                    <a href="https://bsky.app/profile/enmatsutarja.bsky.social" target='_blank' rel="noreferrer">
                        Bluesky -- @enmatsutarja.bsky.social
                    </a>
                </li>
                <li>
                    <a href="https://x.com/Borja18752612" target='_blank' rel="noreferrer">
                        Twitter -- @Borja18752612
                    </a>
                </li>
            </ul>
            <div className='divider' />
            My Characters!
            <ul className='characters'>
                <li className='characterlist'>
                    <img className='charpfp' src={pfp1} alt='Dream Jibakoma' />
                    Dream Jibakoma
                </li>
                <li className='characterlist'>
                    <img className='charpfp' src={pfp2} alt='Princess Kimiko' />
                    Princess Kimiko
                </li>
            </ul>
        </div>
    )
}
export default Homepage;