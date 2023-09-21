export const dynamic = "force-dynamic"
export const revalidate = 0

import { getMeal } from "@/app/serverActions"
import DeleteMealButton from "./DeleteMealButton"
import MealNutritionCard from "../MealNutritionCard"
import MealItemsCard from "./MealItemsCard"

export default async function MealPage({ params }) {
    const mealData = await getMeal(params.id)

    const { id, created_at, ingredients, name } = mealData[0]
    const ingredientsJSON = JSON.parse(ingredients)

    return (
        <div className="flex flex-col space-x-4 items-center dark:text-white">
            <h1 className="text-2xl text-indigo-700">{name}</h1>
            <div className="grid grid-cols-2 gap-2">
                <MealItemsCard ingredients={ingredientsJSON} />

                <MealNutritionCard ingredients={ingredientsJSON} />
            </div>
            <DeleteMealButton mealId={params.id} />
        </div>
    )
}
