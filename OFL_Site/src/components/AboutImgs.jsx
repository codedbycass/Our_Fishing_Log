import waves from "../assets/waves.gif"
import IMG_1056 from "../assets/food/IMG_1056.png"
import IMG_1055 from "../assets/food/IMG_1055.png"
import IMG_1054 from "../assets/food/IMG_1054.png"
import IMG_1052 from "../assets/food/IMG_1052.png"

export default function AboutImgs() {
    return (
        <div className="min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${waves})` }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 m-12">
                <div className="border-yellow-200 border flex justify-center items-start">
                    <img src={IMG_1056} className="max-w-full hover:animate-bounce" />
                </div>
                <div className="border"></div> {/* Empty div for spacing on large screens */}
                <div className="border-red-200 border flex justify-center items-end">
                    <img src={IMG_1055} className="max-w-full hover:animate-bounce" />
                </div>
                <div className="border"></div> {/* Empty div for spacing on large screens */}
                <div className="border"></div> {/* Empty div for spacing on large screens */}
                <div className="border-yellow-200 border flex justify-center items-start">
                    <img src={IMG_1054} className="max-w-full hover:animate-bounce" />
                </div>
                <div className="border-red-400 border"></div> {/* Empty div for spacing on medium screens */}
                <div className="border-yellow-200 border flex justify-center items-end">
                    <img src={IMG_1052} className="max-w-full hover:animate-bounce" />
                </div>
                
            </div>
        </div>
    )
}
