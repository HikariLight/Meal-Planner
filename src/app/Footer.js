export default function Footer() {
    return (
        <div className="h-full flex flex-row justify-center space-x-4 bg-sky-950 text-white p-2">
            <p className="tracking-wider">
                Created by:
                <a
                    className="hover:text-orange-600"
                    href="https://github.com/HikariLight"
                    target="_blank"
                >
                    HikariLight
                </a>
                . All rights reserveed.
            </p>
        </div>
    )
}
