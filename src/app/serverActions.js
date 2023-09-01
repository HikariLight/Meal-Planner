"use server"

export async function searchFoodDatabase(searchQuery) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.USDA_API_KEY}&dataType=Foundation&query=${searchQuery}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}

export async function getMeals() {
    const { data, error } = await supabase.from("meals").select()
    return data
}
