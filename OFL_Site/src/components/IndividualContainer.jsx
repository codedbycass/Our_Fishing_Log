import feini from "../assets/feini.png"
import magnetTwo from "../assets/magnetTwo.png"
import feiniKieranAlessi from "../assets/feiniKieranAlessi.png"
import fsmokedwhiting from "../assets/fsmokedwhiting.png"

export default function IndividualContainer() {
    return(
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2">
                <div className="border relative">
                    <div className="p-4 m-12 bg-white w-72 border">
                        <img src={feini} alt="Profile"/>
                        <h2>Role</h2>
                        <h2>Based in</h2>
                    </div>
                </div>
                <div className="border relative mt-16">
                    <div className="flex flex-col items-center relative">
                    <img src={magnetTwo} className="w-auto h-32 absolute rotate-90 -top-16 left-1/2 transform -translate-x-1/2 rounded-lg   shadow-xl hover:rotate-2"/>
                        <div className="border border-gray-200 rounded-sm shadow-lg text-justify px-8 py-12 bg-yellow-100 mx-12 text-sm">
                            <h2>Person's bio here</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae eveniet distinctio cumque culpa nisi qui tempore numquam accusamus nostrum eligendi ex perspiciatis, aliquam blanditiis error exercitationem, ab consectetur ducimus?</p>
                        </div>
                        {/* <img src={feiniKieranAlessi} className="w-72 h-auto -translate-y-6 translate-x-12"/>
                        <img src={fsmokedwhiting} className="w-56 h-auto -translate-y-24 -translate-x-16"/> */}
                    </div>
                </div>
                <div className="border text-red-400 bg-yellow-200 m-4">This page will be tailored to the people's response. If they had made art, written articles, or have any pics I want to put them here to personalize it. But generally, the layout will be the same. Make the screen smaller to see mobile view.</div>
                <div className="border">Hi</div>
            </div>
        </>
    )
}