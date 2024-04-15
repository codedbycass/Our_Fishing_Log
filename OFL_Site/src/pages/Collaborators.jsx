import LogoCard from "../components/LogoCard"
import People from "../components/People"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Collaborators() {
    return(
        <>
            <div className="grid md:grid-cols-3 mt-20 mb-18">
                <div className="col-span-1">
                    <LogoCard />
                </div>
                <div className="col-span-2 overflow-y-scroll h-screen">
                    <People />
                </div>
            </div>
        </>
    )
}