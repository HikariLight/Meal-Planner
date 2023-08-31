import Link from "next/link"

export default function Navbar() {
    return (
        <div className="h-full flex flex-row align-center justify-center space-x-4 bg-sky-950 text-white p-2">
            <Link href="/">Home</Link>
            <Link href="/meal">Meal</Link>
        </div>
    )
}
