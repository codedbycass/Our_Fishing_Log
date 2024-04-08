import MainHeader from "../components/MainHeader"
import fridgebg from '../assets/fridgebg.jpeg'

export default function Fridge() {
    return(
        <>
            <div style={{
                    backgroundImage: `url(${fridgebg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
            }}
            className="rounded-t-3xl">
                <MainHeader />
                <div className="grid sm:grid-cols-3">
                    <div className="border-red-100 border">
                        <h1>TEst</h1>
                    </div>
                    <div className="border-red-100 border">

                    </div>
                    <div className="border-red-100 border">

                    </div>
                </div>
            </div>
        </>
    )
}