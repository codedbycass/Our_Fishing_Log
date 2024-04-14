import feini from "../assets/feini.png"
export default function People() {
    return(
        <>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-rows-3 overflow-y-scroll">
                <div className="border-blue-300 border p-2">
                    <img src={feini} />
                    <h2>Name</h2>
                    <h3>Role</h3>
                </div>
                <div className="border-blue-300 border">2</div>
                <div className="border-blue-300 border">3</div>
                <div className="border-blue-300 border">4</div>
                <div className="border-blue-300 border p-2">
                    <img src={feini} />
                    <h2>Name</h2>
                    <h3>Role</h3>
                </div>
                <div className="border-blue-300 border">2</div>
                <div className="border-blue-300 border">3</div>
                <div className="border-blue-300 border">4</div>
                <div className="border-blue-300 border p-2">
                    <img src={feini} />
                    <h2>Name</h2>
                    <h3>Role</h3>
                </div>
                <div className="border-blue-300 border">2</div>
                <div className="border-blue-300 border">3</div>
                <div className="border-blue-300 border">4</div>
            </div>
        </>
    )
}