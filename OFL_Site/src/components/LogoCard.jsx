import logo from "../assets/logo.png"
export default function LogoCard() {
    return(
        <>
            <div className="p-2 flex flex-col justify-center">
                <img src={logo} className="w-80 h-auto"/>
                <h1 className="font-bold">Our Fishing Log</h1>
                <p className="text-sm">
                    Our Fishing Log is an unfolding collective process, with many   collaborators helping to shape it. This includes the brilliant    people found here, plus many other participants, teachers, thought     partners, supporters, beloveds, and ancestors who paved the way.
                </p>
            </div>
        </>
    )
}