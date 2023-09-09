import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative flex items-center">
            <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                <div className="flex flex-col">
                    <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
                        Be intelligent about your eating habbits
                    </h1>
                    <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
                        Meal Planner allows you to create meals, see their
                        nutritional information, and plan them throughout the
                        week to help you understand your eating habits better.
                    </h2>
                    <div className="flex items-center justify-center my-4">
                        <Link
                            href="#"
                            className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent rounded text-md hover:bg-gray-900"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="#"
                            className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 rounded dark:text-white hover:bg-gray-900 hover:text-white text-md"
                        >
                            Search
                        </Link>
                    </div>
                </div>
                <div className="relative block w-full mx-auto mt-6 md:mt-0">
                    <img
                        src="/diet.svg"
                        className="max-w-xs m-auto md:max-w-2xl"
                    />
                </div>
            </div>
        </div>
    )
}
