"use client"

import { Suspense, useState } from "react"
import { searchFoodDatabase } from "../serverActions"
import ResultsFeed from "./ResultsFeed"
import { LoadingSpinner } from "@/components"

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState()

    const handleChange = async (event) => {
        const searchQuery = event.target.value

        if (!searchQuery == "") {
            const results = await searchFoodDatabase(searchQuery)
            console.log(results.totalHits)
            console.log(results)
            setSearchResults(results.foods)
        }
    }

    return (
        <div className="w-full grid place-items-center">
            <h1 className="text-2xl text-indigo-700 uppercase text-center my-2">
                Search Ingredients Database
            </h1>

            <input
                className="p-2 w-1/2 my-2"
                type="text"
                onChange={(event) => {
                    handleChange(event)
                }}
            />

            <Suspense fallback={<LoadingSpinner />}>
                <ResultsFeed searchResults={searchResults} />
            </Suspense>
        </div>
    )
}
