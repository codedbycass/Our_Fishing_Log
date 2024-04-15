import Nav from "../components/Nav"
import logo from "../assets/logo.png"
import feiniKieranAlessi from "../assets/feiniKieranAlessi.png"
import Skatewings from "../assets/Skatewings.png"
import fsmokedwhiting from "../assets/fsmokedwhiting.png"
import randalls57 from "../assets/randalls57.png"
import randalls79 from "../assets/randalls79.png"

export default function About() {
    return (
        <>
            <div className="text-white">
                <div className="px-16 pt-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600">
                <div className="flex justify-center py-12">
                <img src={logo} className=""/>
            </div>
                    <h1 className="font-bold text-xl">Our Fishing Log is a Philly storytelling project about our local fish, people who love fish, and the ways fish connect us to the world, each other & ourselves</h1>
                    <p className="py-4">Philadelphia is a city of two rivers, linked to the Atlantic Ocean. Its history and culture are waterborne. It’s home to many — people Indigenous to the region, born-and-raised, transplants, and immigrants alike — who have deep ancestral and cultural connections with water and fish. Yet today, many Philly residents may feel disconnected from their waters, cultures, and foods. Fish can connect us to, and teach us about, all three.</p>
                    <p className="py-4">Our Fishing Log (OFL, pronounced awful - or awe-full? 😉) aims to explore, synthesize, and build community in Philly through fish. It’s a multimedia storytelling project, centered around a documentary podcast series. In addition to the podcast, we are sharing morsels of visual storytelling, hosting events, making a zine, and doing gyotaku (traditional Japanese fish printing) workshops with local youth.</p>
                </div>
                <div className="px-16 bg-gradient-to-b from-blue-600 via-blue-500 to-yellow-600">
                    <p className="py-4">Each podcast episode traces a narrative arc through a different species of fish found in local waters, including freshwaters around Philadelphia and ocean waters in New Jersey and Delaware. We start by going fishing, and end by inviting a local home cook or chef to co-create and share a meal that’s meaningful to them. In between, we include conversations with a diverse lineup of anglers, scientists, culinary experts, conservationists, and stewards, plus exploratory interludes, lyrical reflections, and sonic pleasures.</p>
                    <p className="py-4">This project is a coming together of many minds, bodies, and hearts. feini yin is our lead reporter and project manager — you’ll hear their voice on the podcast and, unless otherwise stated, you can assume they’re the one posting on our social media. Rowhome Productions is producing our podcast. Neal Santos is our lead visual storyteller. Fishadelphia is our community partner. You can read more about the many amazing project contributors on our collaborators page.</p>
                </div>
                <div className="px-16 bg-gradient-to-b from-yellow-600 via-orange-600 to-orange-500">
                    <p className="pt-4 pb-20">OFL is made possible through the generous support of individual GoFundMe donors, the Independence Public Media Foundation’s Community Voices Grant, the Velocity Fund, the Philadelphia Media Founders Exchange (supported by The Lenfest Institute for Journalism, The Knight-Lenfest Local News Transformation Fund, and the Independence Public Media Foundation), the Local Catch Network and University of Maine’s School of Marine Sciences, the Better Bike Share Partnership Mini-Grant (supported by Indego Bike Share and the City of Philadelphia), the Leeway Foundation’s Art and Change Grant, the Lenfest Institute’s Next Generation Fund, and Scribe Video Center’s Philadelphia Independent Media Fund.</p>
                </div>
                <div className="min-h-screen bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${feiniKieranAlessi})` }}>
                    <p className="text-xs p-2">"feini fishing" by Kieran Alessi</p>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 m-12 gap-2">
                        <div className="border-yellow-200 border">
                            <img src={Skatewings}/>
                        </div>
                        <div className="border-yellow-200 border flex items-center">
                            <img src={randalls57} />
                        </div>
                        <div className="border-yellow-200 border flex flex-col items-center">
                            <img src={fsmokedwhiting}/>
                            <p className="text-black">feini with smoked whiting</p>
                        </div>
                        <div className="border-yellow-200 border py-20 rounded-sm px-2">
                            <img src={randalls79} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
