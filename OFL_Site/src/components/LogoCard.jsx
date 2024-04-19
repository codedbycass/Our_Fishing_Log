import logo from "../assets/logo.png"
export default function LogoCard() {
    return(
        <>
            <div className="flex flex-col justify-center items-center text-white">
                <img src={logo} className="w-auto h-auto mb-10"/>
                <h1 className="font-bold text-xl">Our Fishing Log</h1>
                <p className="text-sm text-justify">
                    Our Fishing Log is an unfolding collective process, with many   collaborators helping to shape it. This includes the brilliant    people found here, plus many other participants, teachers, thought     partners, supporters, beloveds, and ancestors who paved the way.
                </p>
            </div>
        </>
    )
}