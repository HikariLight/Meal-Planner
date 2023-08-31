"use server"

export default async function searchFoodDatabase(searchQuery) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.USDA_API_KEY}&dataType=Foundation&query=${searchQuery}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}