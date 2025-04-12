
import house from "./pictures/house1.PNG"
import { Link } from 'react-router-dom'

export default function Home(){ 
    return(
        
        <main className="maine">
            
            <div className="home-pg">
             <h1>House Of Coral</h1>   
             <div>
               <Link to = '/rsvp'> <button>Rsvp</button> </Link>
             </div>
            </div>

            <div className="time">
                <img src={house } alt="" className="house" />
                <p>House of Coral occupies creatives with multi-media outlets. <strong>May 3rd at 6pm</strong> doors will open for Coral's art exhibit! The main artist, <strong>Rho Dove</strong>, will have virtual prints as well as canvas pieces out on display and for sale. <strong>The $15 cover charge</strong> will give you access to free drinks and free food provided by House of Coral. <strong>Baal Pit</strong> will be performing live along with 2 local artists as openers.</p>
            </div>

            
             <div className="Rho" >
                        <h2>About our artists</h2>
                        <h1>Rho Dove</h1>
                        <div className="Rp">
                            <div style={{ flex: 1 }} className="rp2">
                                <p>This body of work is an ongoing exploration of the interconnectedness between the human form and the natural world. Through this collection, I blend human figures into abstracted landscapes to symbolize the inseparability of humanity from nature—despite how easy it is to become distracted or distanced from it in the modern world. Nature sustains us, yet we often turn away from it, just as we sometimes turn away from ourselves.</p>
                                        
                                <p>Each piece uses pointillism as a foundational technique, a style I'm personally drawn to because of my own vision challenges. It allows me to engage in detailed, expansive creation without the need for tools to enhance my sight—letting the work unfold organically through my eye and hand. Unlike traditional pointillism, which relies solely on primary colors and the viewer's distance to create blends, I use secondary and tertiary colors intentionally to build depth. I also incorporate metallics—copper, silver, gold, and pearl—to interact with light, enriching the visual blending process and bringing the work to life in different lighting conditions.</p>
                            </div>
                            
                            <div style={{ flex: 1 }} className="rp2">
                                <p>The first painting, Head in the Clouds, depicts a figure turned away, their head enveloped in cloud. It reflects a period of deep introspection—of feeling detached from myself, even while shining outwardly for others. This piece speaks to escapism: finding beauty in mental landscapes while quietly neglecting my own needs.</p>
                                        
                                <p>The second painting, Of the Tangerine Bristle, portrays the narrative of a relationship. It begins in warmth—orange, pearl, glowing—and evolves into something grounded and home-like. But above it all looms a sky filled with reflective clouds, suggesting an uncertain future. The mirrors in the sky point inward: the unknown will always reveal more of the self. This work holds my sadness and fear around losing someone dear, while also honoring the growth found in facing that darkness.</p>
                                        
                                <p>The third piece in the series is still unfolding, and I'm allowing it the time and space it needs to reveal itself.</p>
                            </div>
                            </div>
                    </div>
            
            <div className="ball">
            <div style={{ whiteSpace: "pre-wrap" }} className="ball-p">
  {`  Connection is an intrinsic driving force for us. Before writing this, we had talked a lot about our values as a band. Rooted in the human experience, Ball Pit finds light and growth in the world around us through our experiences both shared and individual. Our curiosity to understand these experiences and explore them is mutual and encouraged by each other. This shared mentality seeps its way into the music we create. We encapsulate memories through lyrics and rhythms, but we also create new ones through imaginative and playful exploration. 
This may sound like running a clarinet through a wah pedal over an improvised atmospheric looping session, or a saxophone solo over an indie twang inspired song. 
At our shows we seek to share the experiences we’ve written about and embodied in our songs and hopefully provide the audience a way to feel connected to us. We try to incorporate crowd engagement in ways that are fun, and silly, but also while keeping things a bit unexpected until you’re at one of our shows. 
We are really looking forward to sharing this experience with y’all, and we encourage everyone to jump in! 
-Ball Pit
`}
</div>
                <h1>Ball Pit</h1>

            </div>
            {/* <div >
                <h1>Website written By Benjamin Brechter</h1>
                <p>I also will be a member of this art exhibit. My creative abilities rely more on writing and filming but I will be present at the show!</p>
                <h1>I built this website with react. The backend is being hosted by Render and the front end is hosted on AWS!</h1>
            </div> */}
            
        </main>
        
    )
}