"use client"
import { useRef, useState } from "react"
import IngredientSearchCard from "./IngredientSearchCard"
import { searchFoodDatabase } from "./serverActions"

export default function Home() {
    const inputBox = useRef()
    const [data, setData] = useState()

    const submit = async (event) => {
        event.preventDefault()
        const searchQuery = inputBox.current.value
        const searchResults = await searchFoodDatabase(searchQuery)
        setData(searchResults.foods)
    }

    return (
        <main className="h-full grid place-items-center">
            <div className="flex flex-col">
                <h1 className="text-3xl text-green-700 text-center">
                    Meal Planner
                </h1>

                <form onSubmit={submit} className="flex flex-col my-2">
                    <input
                        className="border border-sky-950 p-2 my-2"
                        type="text"
                        ref={inputBox}
                        placeholder="Ingredient name"
                    />
                    <button className="bg-sky-800 text-white p-2 rounded">
                        Search
                    </button>
                </form>

                <div className="grid grid-cols-2 gap-2">
                    {data?.map((food, index) => {
                        return (
                            <IngredientSearchCard foodData={food} key={index} />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
