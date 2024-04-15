import MainSticky from "../components/MainSticky"
import Email from "./Email"
import logo from "../assets/logo.png"

export default function Main() {
    return (
        <>
            <MainSticky />
            <div className="flex flex-col items-center py-8">
                <img src={logo} className="h-28 w-auto"/>
            </div>
            <Email />
        </>
    )
}
