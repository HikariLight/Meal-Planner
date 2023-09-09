"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import { NavLink } from "@/components"

export default function Navbar() {
    const currentRoute = useSelectedLayoutSegment()

    const routes = [
        { name: null, label: "Home", path: "/", active: false },
        { name: "meal", label: "Meals", path: "/meal", active: false },
        { name: "about", label: "About", path: "/about", active: false },
        { name: "login", label: "Login", path: "#", active: false },
        { name: "signup", label: "Signup", path: "#", active: false },
    ]

    return (
        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
            {routes.map((route, index) => {
                return (
                    <NavLink
                        route={route.path}
                        routeName={route.name}
                        currentRoute={currentRoute}
                        label={route.label}
                        key={index}
                    />
                )
            })}
        </nav>
    )
}
