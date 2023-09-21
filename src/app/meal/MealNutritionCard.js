import { calculateMealNutritionalInfo } from "@/utils"

export default async function MealNutritionCard({ ingredients }) {
    const nutritionalInfo = await calculateMealNutritionalInfo(ingredients)

    return (
        <div>
            <h1 className="text-xl text-center text-indigo-600 my-2">
                Nutritional Information
            </h1>
            <div className="grid grid-cols-3 max-h-[30vh] overflow-y-auto">
                {Object.entries(nutritionalInfo).map((nutrient, key) => {
                    return (
                        <p
                            className="text-indigo-400"
                            key={key}
                        >{`${nutrient[0]}: ${nutrient[1].amount}${nutrient[1].unit}`}</p>
                    )
                })}
            </div>
        </div>
    )
}
