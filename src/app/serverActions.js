"use server"

import supabase from "@/utils/supabase"

export async function searchFoodDatabase(searchQuery) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.USDA_API_KEY}&dataType=Foundation&query=${searchQuery}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}

export async function getIngredientData(id) {
    const apiLink = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${process.env.USDA_API_KEY}`
    const res = await fetch(apiLink)
    const data = await res.json()
    return data
}

export async function getMeal(id) {
    const { data, error } = await supabase.from("meals").select().eq("id", id)
    return data
}

export async function getMeals() {
    const { data, error } = await supabase.from("meals").select()
    return data
}

export async function createMeal(name, ingredients) {
    const { error } = await supabase.from("meals").insert({ name, ingredients })
    return error
}

export async function deleteMeal(id) {
    const { error } = await supabase.from("meals").delete().eq("id", id)
    return error
}
