import Link from "next/link"
import Navbar from "./Navbar"
import { CalendarIcon } from "@heroicons/react/24/solid"

export default function Header() {
    return (
        <header className="flex items-center w-full h-full">
            <div className="container flex items-center justify-between px-6 mx-auto">
                <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                    <Link href="/">
                        <CalendarIcon className="h-16 w-16 text-indigo-600" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
