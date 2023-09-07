async function getFood(id) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${process.env.USDA_API_KEY}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}

export default async function FoodPage({ params }) {
    const foodData = await getFood(params.id)

    return (
        <div className="border border-purple-800 rounded text-center p-2">
            <h1 className="text-3xl my-2 text-emerald-800">
                Name: {foodData.description}
            </h1>
            <h3 className="text-xl my-2 text-emerald-600">
                Description: {foodData.foodCategory.description}
            </h3>

            <div className="grid grid-cols-3">
                {foodData.foodNutrients.map((data, index) => {
                    return (
                        <h3 key={index}>
                            {data.nutrient.name}: {data.nutrient.number}
                            {data.nutrient.unitName}
                        </h3>
                    )
                })}
            </div>
        </div>
    )
}
