import fridgebg from "../.././assets/fridgebg.jpeg"
import waves from "../.././assets/waves.gif"

export default function Individual() {
    return(
        <>
        <div className="bg-blue-600 px-12 pt-20 bg-cover"
        style={{ backgroundImage: `url(${waves})` }}>
        <div
            className="rounded-t-3xl min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${fridgebg})` }}
        >

        </div>
        </div>
        </>
    )
}