"use client"

import { useRef, useState } from "react"
import { createMeal, searchFoodDatabase } from "@/app/serverActions"
import MealPreviewCard from "./MealPreviewCard"
import IngredientAddCard from "./IngredientAddCard"
import { CustomButton } from "@/components"

export default function MealCreationPage() {
    const mealNameInput = useRef()
    const ingredientsSearchResults = useRef()

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const [mealName, setMealName] = useState()
    const [ingredientData, setIngredientData] = useState()
    const [ingredientsList, setIngredientsList] = useState([])

    const handleClick = async (event) => {
        event.preventDefault()

        const mealName = mealNameInput.current.value
        const error = await createMeal(mealName, ingredientsList)
        console.log(error)

        if (error !== null) {
            setError(true)
            setErrorMessage(error.details)
        } else {
            setSuccess(true)
        }
    }

    const searchIngredient = async (event) => {
        const searchQuery = event.target.value
        if (searchQuery !== "") {
            const searchResults = await searchFoodDatabase(searchQuery)
            setIngredientData(searchResults.foods)
        }
    }

    const addIngredient = (ingredient) => {
        setIngredientsList((prevState) => {
            const newState = prevState
            let duplicatesExist = false

            for (let oldIngredient of newState) {
                if (oldIngredient.id == ingredient.id) {
                    oldIngredient.count += 1
                    duplicatesExist = true
                }
            }

            if (duplicatesExist) return newState

            return [...prevState, ingredient]
        })
    }

    return (
        <div className="h-full w-full">
            <h1 className="text-2xl text-center text-sky-800 my-2">
                Create a new meal
            </h1>

            {success ? (
                <h1 className="text-2xl text-center text-green-700">
                    Meal Created Successfully
                </h1>
            ) : (
                <div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center border border-sky-800 p-4 text-center">
                            <h3 className="text-xl text-sky-700">Meal Info</h3>
                            <div className="flex flex-row items-center my-2">
                                <label className="mx-2">Meal Name: </label>
                                <input
                                    type="text"
                                    className={`border border-sky-800 p-2 ${
                                        error ? "border-2 border-red-800" : ""
                                    }`}
                                    ref={mealNameInput}
                                    onChange={(event) => {
                                        setMealName(event.target.value)
                                    }}
                                />
                                {errorMessage && (
                                    <label className="text-red-700">
                                        An error occured: {errorMessage}
                                    </label>
                                )}
                            </div>

                            <div className="flex flex-row items-center my-2">
                                <label className="mx-2">Ingredient: </label>
                                <input
                                    type="text"
                                    className="border border-sky-800 p-2 "
                                    onChange={(event) => {
                                        searchIngredient(event)
                                    }}
                                />
                            </div>

                            <div
                                className="grid grid-cols-2 gap-2"
                                ref={ingredientsSearchResults}
                            >
                                {ingredientData?.map((ingredient, index) => {
                                    return (
                                        <IngredientAddCard
                                            ingredientData={ingredient}
                                            key={index}
                                            addIngredient={addIngredient}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        <MealPreviewCard
                            mealName={mealName}
                            ingredients={ingredientsList}
                        />
                    </div>

                    <CustomButton
                        textValue={"Create Meal"}
                        clickHandler={handleClick}
                    />
                </div>
            )}
        </div>
    )
}
