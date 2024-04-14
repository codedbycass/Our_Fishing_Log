import LogoCard from "../components/LogoCard"
import People from "../components/People"

export default function About() {
    return(
        <>
            <div className="grid md:grid-cols-3">
                <div className="col-span-1 border-red-300 border">
                    <LogoCard />
                </div>
                <div className="col-span-2 border-red-300 border">
                    <People />
                </div>
            </div>
        </>
    )
}
