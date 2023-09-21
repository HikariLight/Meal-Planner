import { getIngredientData } from "@/app/serverActions"

const calculateMealNutritionalInfo = async (ingredients) => {
    const nutrientsInfo = {}

    for (let ingredient of ingredients) {
        const data = await getIngredientData(ingredient.id)
        const currentNutrientsList = Object.keys(nutrientsInfo)

        for (let entry of data.foodNutrients) {
            const { amount } = entry
            if (amount == undefined) continue

            const { name, unitName } = entry.nutrient

            console.log({ name, amount, unitName })

            if (!currentNutrientsList.includes(name)) {
                nutrientsInfo[name] = { amount: Number(amount), unit: unitName }
            } else {
                nutrientsInfo[name].amount += Number(amount)
            }

            console.log(` -------- Done with ${name} -------- `)
        }

        console.log(` ======= Done with ${ingredient.id} ======= `)
    }

    return nutrientsInfo
}

export { calculateMealNutritionalInfo }
