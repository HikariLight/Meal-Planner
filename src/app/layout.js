import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./Header"
import Footer from "./Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Meal Planner",
    description: "Be intelligent about your eating habits",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
                    <div className="h-24 sm:h-32">
                        <Header />
                    </div>

                    <div className="relative h-[82vh] lg:h-[85vh] grid place-items-center">
                        {children}
                    </div>

                    <div className="h-14">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
