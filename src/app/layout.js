import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./Navbar"
import Footer from "./Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Meal Planner",
    description: "Plan your meals for the month",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="">
                    <div className="h-[3vh]">
                        <Navbar />
                    </div>

                    <div className="h-[94vh] overflow-auto">{children}</div>

                    <div className="h-[3vh]">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
