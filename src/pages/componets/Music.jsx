import { Link } from 'react-router-dom'
import Pit from "../pictures/aden.jpg"
import homebtn from "../pictures/CoralHouse.png"

function Music(){
    return(
        <div className="ball" >
            <Link to="/Home" > 
            <img src={homebtn} alt="" className='always-home'/>
            </Link>
            <h1>Party Music Lineup for June 14th</h1>

            <section className="ball-background">
                <div className="ball-nav">
                        
                    <ul className="ball-ul">
                        <li>Support Local Artist!!</li>
                        <a href="#headliner"><li>Headliner</li> </a>
                        <a href=""><li>Openers</li></a>
                        <a href=""><li>DJ Afters</li></a>
                        
                        
                        
                    </ul>
                </div>
                <img src={Pit} alt="" />
            </section>
            
            <section className="ball-info" id='headliner'>
                <h1>BAAL PIT</h1>
                <div className="break">
                    <p>
                        Connection is an intrinsic driving force for us. Before writing this, we had talked a lot about our values as a band. Rooted in the human experience, Ball Pit finds light and growth in the world around us through our experiences both shared and individual. Our curiosity to understand these experiences and explore them is mutual and encouraged by each other. This shared mentality seeps its way into the music we create. We encapsulate memories through lyrics and rhythms, but we also create new ones through imaginative and playful exploration. 
                    </p>
                    <p>
                        This may sound like running a clarinet through a wah pedal over an improvised atmospheric looping session, or a saxophone solo over an indie twang inspired song. 
                        At our shows we seek to share the experiences we’ve written about and embodied in our songs and hopefully provide the audience a way to feel connected to us. We try to incorporate crowd engagement in ways that are fun, and silly, but also while keeping things a bit unexpected until you’re at one of our shows. 
                        We are really looking forward to sharing this experience with y’all, and we encourage everyone to jump in! 
                        -Ball Pit
                    </p>
                </div>
                <h1>Members</h1>
                <ul>
                    <li>Aden De La Cerda - aden_dlc  </li>
                    <li>Carmen- the.car.men</li>
                    <li>Ethan- no socials</li>
                </ul>
            </section>
            
        </div>
    );
};

export default Music