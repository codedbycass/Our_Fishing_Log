import Fridge from "../components/Fridge"
import waves from "../assets/waves.gif"
export default function Home() {
    return(
        <>
        <div className="bg-blue-600 px-12 pt-20 bg-cover"
        style={{ backgroundImage: `url(${waves})` }}>
            <Fridge/>
        </div>
        </>
    )
}