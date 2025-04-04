import Navbar from "./componets/nav-bar"
import flyer from "./pictures/flyer.PNG"
import { Link } from 'react-router-dom'

export default function Home(){ 
    return(
        <main>
            <Navbar/>
            
            <div className="home-pg">
             <img  className= "img-container" src={flyer} alt="Flyer" />  
             <Link to = '/rsvp'> <button>Rsvp</button> </Link>
             
            </div>
        </main>
        
    )
}