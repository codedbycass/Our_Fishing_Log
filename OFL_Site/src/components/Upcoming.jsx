export default function Upcoming() {
    return(
        <div className="relative">
            <div className="size-28 bg-red-300 rounded-full absolute right-0 translate-x-4 bottom-0 z-10">
                <p>Stay tuned...</p>
            </div>
            <div className="bg-yellow-100 p-2 shadow-lg rotate-3 relative z-0">
                <h3 className="text-lg">Upcoming Episodes...</h3>
                <ul>
                    <li className="hover:text-blue-400">Shad</li>
                    <li className="hover:text-blue-400">Oysters</li>
                    <li className="hover:text-blue-400">Bluefish</li>
                    <li className="hover:text-blue-400">Snakehead</li>
                    <li className="hover:text-blue-400">Tilefish</li>
                    <li className="hover:text-blue-400">Porgy</li>
                </ul>
            </div>
        </div>
    )
}
