import din1 from '../assets/din1.png';
import magnetTwo from "../assets/magnetTwo.png"
import Upcoming from "./Upcoming"

export default function FoodPic() {
    return (
        <>
            <Upcoming />
            <div className="flex flex-col items-center relative">
                <img src={magnetTwo} className="w-auto h-32 absolute rotate-90 -top-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-xl hover:rotate-2"/>
                <div className="border border-gray-200 rounded-sm shadow-lg p-4 bg-white">
                    <img src={din1} className="w-56 h-auto pb-2" alt="Food" />
                    <p className="text-xs">Steamed whole black sea bass</p>
                    <p className="text-xs">Sourced from Fishermen’s Dock Co-op</p>
                    <p className="text-xs">(Point Pleasant, NJ)</p>
                </div>
            </div>
        </>
    )
}
