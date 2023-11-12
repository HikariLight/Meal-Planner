"use server"

import supabase from "@/utils/supabase"
import * as argon2 from "argon2"

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

export async function createAccount(username, email, password) {
    const passwordHash = await argon2.hash(password)

    const response = await supabase
        .from("users")
        .insert({ username, email, password: passwordHash })
    return response
}

export async function verifyAccount(email, password) {
    let response = await supabase.from("users").select().eq("email", email)

    if (response.status == 200) {
        const accountPassword = response.data[0].password
        try {
            if (await argon2.verify(accountPassword, password)) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error)
        }
    }
}
