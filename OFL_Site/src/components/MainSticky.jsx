import mainmagnet from "../assets/mainmagnet.png"

export default function MainSticky() {
    return(
        <>
            <div className="flex flex-col items-center relative">
                <img src={mainmagnet} className="w-20 h-auto absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-lg hover:rotate"/>
                <h2 className="bg-yellow-100 px-8 py-12 text-lg shadow-xl">
                Our Fishing Log is a Philly storytelling project about our local fish, people who love fish, and the ways fish connect us to the world, each other & ourselves.
                </h2>
            </div>
        </>
    )
}