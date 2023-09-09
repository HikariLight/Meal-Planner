import Link from "next/link"

export default function NavLink({ label, route, routeName, currentRoute }) {
    return (
        <Link
            className={`flex px-6 py-2 hover:text-indigo-500 ${
                routeName == currentRoute
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : ""
            }`}
            href={route}
        >
            {label}
        </Link>
    )
}
