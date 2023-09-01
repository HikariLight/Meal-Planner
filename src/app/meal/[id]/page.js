import { getMeal, getIngredientData } from "@/app/serverActions"
import FoodSearchResultCard from "@/app/FoodSearchResultCard"
import DeleteMealButton from "./DeleteMealButton"

export default async function MealPage({ params }) {
    const mealData = await getMeal(params.id)

    const { id, creationDate, mealName, ingredients } = mealData[0]

    const ingredientsArray = JSON.parse(ingredients)
    const ingredientsData = []

    for (let ingredient of ingredientsArray) {
        const ingredientData = await getIngredientData(ingredient)
        ingredientsData.push(ingredientData)
    }

    return (
        <div>
            <h1 className="text-xl text-green-700">{mealName}</h1>
            {ingredientsData.map((ingredient, index) => {
                return (
                    <FoodSearchResultCard foodData={ingredient} key={index} />
                )
            })}

            <DeleteMealButton mealId={params.id} />
        </div>
    )
}
