export default function Nav() {
    return(
        <div className="fixed top-0 left-0 w-full bg-white z-10 p-4">
            <div className="space-x-6 text-2xl">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/collaborators">Collaborators</a>
            </div>
        </div>
    )
}