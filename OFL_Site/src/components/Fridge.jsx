import MainHeader from "../components/MainHeader"
import fridgebg from "../assets/fridgebg.jpeg"
import Main from "./Main"
import FridgeTeam from "./FridgeTeam"
import FoodPic from "./FoodPic"


export default function Fridge() {
    return (
        <>
            <div
                className="rounded-t-3xl min-h-screen bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${fridgebg})` }}
            >
                <MainHeader />
                <div className="grid md:grid-cols-3">
                    <div className="border-red-100 border p-6 order-2 md:order-1">
                        <FridgeTeam />
                    </div>
                    <div className="border-red-100 border p-6 order-1 md:order-2">
                        <Main />
                    </div>
                    <div className="border-red-100 border p-6 order-3 md:order-3">
                        <FoodPic />
                    </div>
                    </div>
            </div>
        </>
    );
}
