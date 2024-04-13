import MainSticky from "../components/MainSticky"
import Learn from "./buttons/Learn"
import Email from "./Email"
import logo from "../assets/logo.png"

export default function Main() {
    return (
        <>
            <MainSticky />
            <div className="flex justify-center p-6">
                <Learn />
            </div>
            <div className="flex flex-col items-center pb-8">
                <img src={logo} className="h-28 w-auto"/>
            </div>
            <Email />
        </>
    )
}
