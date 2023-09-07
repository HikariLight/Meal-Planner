export const dynamic = "force-dynamic"
export const revalidate = 0

import { getMeal } from "@/app/serverActions"
import DeleteMealButton from "./DeleteMealButton"
import IngredientCard from "./IngredientCard"

export default async function MealPage({ params }) {
    const mealData = await getMeal(params.id)

    const { id, created_at, ingredients, name } = mealData[0]
    const ingredientsJSON = JSON.parse(ingredients)

    return (
        <div className="flex flex-col space-x-4 items-center">
            <h1 className="text-2xl text-green-700">{name}</h1>
            {ingredientsJSON.map((ingredient, index) => {
                return <IngredientCard foodData={ingredient} key={index} />
            })}

            <DeleteMealButton mealId={params.id} />
        </div>
    )
}
