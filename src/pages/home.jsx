import Logo from "./componets/logo"
import arrow from "./pictures/down-arrow.png"
import flyer from "./pictures/flyer.png"

import { Link } from 'react-router-dom'

export default function Home(){ 
    return(
        
        <main className="maine">
            {/* <div>
               <Logo/> 
            </div> */}
            
            <div className="home-pg">
             <h1>Do you want to RSVP for the Coral Art Gallery?</h1>   
             <div>
               <Link to = '/rsvp'> <button>Rsvp</button> </Link>
             <button>No</button> 
             </div>
            </div>

            <div className="info">
                <h1>Scroll for more info</h1>
                <img src={arrow} alt="" />
            </div>

            <div className="time">
                <h1>House of Coral</h1>
                <p>House of Coral occupies creatives with multi-media outlets. <strong>May 3rd at 6pm</strong> doors will open for Coral's art exhibit! The main artist, <strong>Rho Dove</strong>, will have virtual prints as well as canvas pieces out on display and for sale. The $15 cover charge will give you access to free drinks and free food provided by House of Coral. <strong>Baal Pit</strong> will be performing live along with 2 local artists as openers.</p>
            </div>

            {/* <div className="Rho">
            
            </div> */}
            
        </main>
        
    )
}