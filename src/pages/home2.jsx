import Coral from "./pictures/CoralHouse.png"
import Clothing from "./pictures/Clothing.png"
import Art from "./pictures/ArtByRho.png"
import Film from "./pictures/film.png"
import Music from "./pictures/Music.png"
import RSVP from "./pictures/RSVP.png"
import { Link } from 'react-router-dom'

export default function Home2(){
 return(
    <div className="Home2">

            <div className="Coral-House-Graphic">
                <img src={Coral} alt="cut out of coral House" />
            </div>
            
            <div className="entry-info">
                <h1>House parties put on by House of Coral!</h1>
                <p>$15 entry fee will include</p>
                <ul>
                    <li>Food</li>
                    <li>Acholoic Dranks</li>
                    <li>Immense Vibes</li>
                </ul>
                <Link to='/rsvp'><img src={RSVP} alt="rsvp button" /></Link>
                
            </div>      

            <div className="Rho-art">
                <p>Information about Rho Dove art pieces</p>
                <Link to= '/Rho'><img src={Art} alt="img of rho art" /> </Link>
                    
             </div>

             <div className="Clothing-rack">
                <p>$5 clothing rack with random gem's</p>
                <img src={Clothing} alt="image of clothing rack" />
            </div>

            <div className="Benbeejammin">
                <img src={Film} alt="picture of camera equiptment" />
                <p>All graphics, videos, pictures, website, Rsvp server, and vibes are provided by Me Benjamin or Benbeejammin</p>
            </div>

            <div className="Music-performers">
                <p>Live music information</p>
                <Link to= 'Music'><img src={Music} alt="img of drum set" /> </Link>
            </div>
            

    </div>
 )
}