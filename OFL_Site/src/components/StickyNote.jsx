import Learn from '../components/buttons/Learn'

export default function StickyNote() {
    return (
        <div className="relative flex justify-center items-center">
            <div className='absolute left-1/2 -translate-x-1/2 bg-green-400 rounded-full text-white top-6 size-18 p-4 text-center z-10'>
                Magnet
            </div>
            <div className="bg-red-100 rounded shadow-xl relative z-0 top-12 w-[380px] h-64 pt-14 px-4 text-lg flex flex-col items-center" id="sticky">
                <h2 className="pb-4">Our Fishing Log is a Philly storytelling project about our local fish, people who love fish, and the ways fish connect us to the world, each other & ourselves 🐟💙🌎</h2>
                <Learn />
            </div>
        </div>
    );
}
