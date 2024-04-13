import Nav from '../components/Nav'

export default function MainHeader() {
    return(
        <div className="flex flex-col text-center">
            <h1 className="text-6xl text-red-600 py-12">
                Our Fishing Log
            </h1>
            <Nav />
        </div>
    )
}