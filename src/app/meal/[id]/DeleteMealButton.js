"use client"

import { deleteMeal } from "@/app/serverActions"
import { useRouter } from "next/navigation"

export default async function DeleteMealButton({ mealId }) {
    const router = useRouter()

    const handleClick = async () => {
        const error = await deleteMeal(mealId)
        router.push("/meal")
    }

    return (
        <button
            className="bg-sky-800 text-white rounded p-2"
            onClick={() => handleClick()}
        >
            Delete Meal
        </button>
    )
}
