import LogoCard from "../components/LogoCard"
import People from "../components/People"
import waves from "../assets/waves.gif"

export default function Collaborators() {
    return(
        <>
            <div className="grid md:grid-cols-3 bg-gradient-to-b from-blue-900 via-blue-400 to-blue-200 pb-12">
                <div className="col-span-1 pt-24 px-16">
                    <LogoCard />
                </div>
                <div className="col-span-2 overflow-y-scroll h-screen pt-24 px-16">
                    <People />
                </div>
            </div>
        </>
    )
}