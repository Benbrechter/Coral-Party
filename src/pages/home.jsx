
import picRho from "./pictures/aboutRho.PNG"
import house from "./pictures/house1.PNG"
import ball from "./pictures/ball.PNG"
import { Link } from 'react-router-dom'

export default function Home(){ 
    return(
        
        <main className="maine">
            
            <div className="home-pg">
             <h1>Do you want to RSVP for the <br/>Coral Art Gallery?</h1>   
             <div>
               <Link to = '/rsvp'> <button>Rsvp</button> </Link>
             <button>No</button> 
             </div>
            </div>

            <div className="time">
                <img src={house } alt="" className="house" />
                <p>House of Coral occupies creatives with multi-media outlets. <strong>May 3rd at 6pm</strong> doors will open for Coral's art exhibit! The main artist, <strong>Rho Dove</strong>, will have virtual prints as well as canvas pieces out on display and for sale. <strong>The $15 cover charge</strong> will give you access to free drinks and free food provided by House of Coral. <strong>Baal Pit</strong> will be performing live along with 2 local artists as openers.</p>
            </div>

            
             <div className="Rho" >
                        <img src={picRho} alt="" />
                        <p>This body of work is an ongoing exploration of the interconnectedness between the human form and the natural world. Through this collection, I blend human figures into abstracted landscapes to symbolize the inseparability of humanity from nature—despite how easy it is to become distracted or distanced from it in the modern world. Nature sustains us, yet we often turn away from it, just as we sometimes turn away from ourselves.
            
            Each piece uses pointillism as a foundational technique, a style I’m personally drawn to because of my own vision challenges. It allows me to engage in detailed, expansive creation without the need for tools to enhance my sight—letting the work unfold organically through my eye and hand. Unlike traditional pointillism, which relies solely on primary colors and the viewer’s distance to create blends, I use secondary and tertiary colors intentionally to build depth. I also incorporate metallics—copper, silver, gold, and pearl—to interact with light, enriching the visual blending process and bringing the work to life in different lighting conditions.
            
            The first painting, Head in the Clouds, depicts a figure turned away, their head enveloped in cloud. It reflects a period of deep introspection—of feeling detached from myself, even while shining outwardly for others. This piece speaks to escapism: finding beauty in mental landscapes while quietly neglecting my own needs.
            
            The second painting, Of the Tangerine Bristle, portrays the narrative of a relationship. It begins in warmth—orange, pearl, glowing—and evolves into something grounded and home-like. But above it all looms a sky filled with reflective clouds, suggesting an uncertain future. The mirrors in the sky point inward: the unknown will always reveal more of the self. This work holds my sadness and fear around losing someone dear, while also honoring the growth found in facing that darkness.
            
            The third piece in the series is still unfolding, and I’m allowing it the time and space it needs to reveal itself.
            
            </p>
                    </div>
            
            <div className="ball">
                <p>Connection is an intrinsic driving force for us. Before writing this, we had talked a lot about our values as a band. Rooted in the human experience, Ball Pit finds light and growth in the world around us through our experiences both shared and individual. Our curiosity to understand these experiences and explore them is mutual and encouraged by each other. This shared mentality seeps its way into the music we create, and the community we seek to foster. 
From a musical standpoint, we are a genre fluid band, blending our inspirations and individual writing and compositional approaches to rule out the mindset of the word “impossible”. This may look like running a clarinet through a wah pedal over an improvised atmospheric looping session, or a saxophone solo over an indie twang inspired song. That’s the thing about Ball Pit, you never know what to expect. No one Ball Pit show is the same, creating unique and personal experiences at each. But, the idea of not knowing what to expect stems from our belief in being limitless. In one person this belief may be strong, but when you’re surrounded by multiple people who believe the same and encourage each other to believe harder, it can make it easier to let your inhibitions go and feel the magic flow. 
The idea of being limitless is a good segway into our belief too that anyone can play music. Reiterating our foundation in connection, we constantly seek to share musical experiences with friends old and new as we believe this sort of connection is a way to be both in your body and free your spirit. There exists a raw energy here, as you never know what you can feel until it’s happening. This organic nature is at the core of shared experience. 
Now, this mission statement would almost feel wrong if we didn’t talk about what really connects us to each other. Any band can create music, but we believe our friendship to be crucial. Our ability to have fun and be silly with each other is what really tethers us to each other. From playing games, to sharing laughs, tears, stories, meals, walks, and all sorts of quality time together, we are more than people who play music together, we are Ball Pit. And, we’re excited to connect with you.
</p>
                <img src={ball} alt="" />

            </div>
            
        </main>
        
    )
}