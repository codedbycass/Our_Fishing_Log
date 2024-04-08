import din1 from '../assets/din1.png';

export default function FoodPic() {
    return (
        <div className="relative -rotate-3 ">
            <div className="absolute left-1/2 -translate-x-1/2 bg-blue-400 rounded-full text-white top-0 size-20 p-4 text-center z-10 -mt-6">
                Magnet
            </div>
            <div className="border border-gray-200 rounded-sm shadow-lg p-4">
                <img src={din1} className="size-56 pb-2" alt="Food" />
                <p className="text-xs">Steamed whole black sea bass</p>
                <p className="text-xs">Sourced from Fishermen’s Dock Co-op</p>
                <p className="text-xs">(Point Pleasant, NJ)</p>
            </div>
        </div>
    );
}
