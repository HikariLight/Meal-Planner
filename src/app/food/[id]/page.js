import NutritionalInfoCard from "@/app/meal/[id]/NutritionalInfoCard"

async function getFood(id) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${process.env.USDA_API_KEY}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}

export default async function FoodPage({ params }) {
    const foodData = await getFood(params.id)

    return (
        <div className="border border-indigo-600 rounded text-center dark:text-white p-2">
            <h1 className="text-3xl my-2 text-indigo-700 dark:text-indigo-500">
                Name: {foodData.description}
            </h1>
            <h3 className="text-xl my-2 text-indigo-600 dark:text-indigo-400">
                Description: {foodData.foodCategory.description}
            </h3>

            <NutritionalInfoCard foodData={foodData} />
        </div>
    )
}
