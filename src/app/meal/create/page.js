"use client"

import { useRef, useState } from "react"
import { createMeal } from "@/app/serverActions"

export default function MealCreationPage() {
    const mealNameInput = useRef()
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const mealName = mealNameInput.current.value
        const error = await createMeal(mealName, "[]")
        console.log(error)

        if (error == null) {
            setSuccess(true)
        } else {
            setFailure(true)
            setErrorMessage(error.details)
        }
    }

    return (
        <div className="border border-sky-800 p-4 text-center">
            <h1 className="text-2xl text-sky-800 my-2">Create a new meal</h1>

            {success ? (
                <h1>Success</h1>
            ) : (
                <form
                    className="flex flex-col space-y-2"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="">Meal Name: </label>
                    <input
                        type="text"
                        className={`border border-sky-800 p-2 ${
                            failure ? "border-2 border-red-800" : ""
                        }`}
                        ref={mealNameInput}
                    />
                    {errorMessage && (
                        <label className="text-red-700">
                            An error occured: {errorMessage}
                        </label>
                    )}

                    <button className="rounded-xl bg-sky-800 text-white p-2 my-2">
                        Create
                    </button>
                </form>
            )}
        </div>
    )
}
