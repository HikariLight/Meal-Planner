export const dynamic = "force-dynamic"
export const revalidate = 0

import { getMeals } from "../serverActions"
import MealCard from "./MealCard"
import Link from "next/link"

export default async function MealPage() {
    const meals = await getMeals()

    return (
        <div className="h-full grid place-items-center dark:text-white">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl text-indigo-700 dark:text-indigo-500 my-2">
                    Meal Page
                </h1>

                <div className="grid grid-cols-2 gap-2">
                    {meals.map((meal, index) => {
                        return (
                            <Link key={index} href={`/meal/${meal.id}`}>
                                <MealCard mealData={meal} key={index} />
                            </Link>
                        )
                    })}
                </div>

                <button className="rounded-md bg-indigo-600 hover:bg-indigo-800 dark:bg-indigo-500 text-white p-2 my-2">
                    <Link href="/meal/create">New Meal</Link>
                </button>
            </div>
        </div>
    )
}
