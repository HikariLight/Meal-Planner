"use client"

import { deleteMeal } from "@/app/serverActions"
import { useRouter } from "next/navigation"
import { CustomButton } from "@/components"

export default async function DeleteMealButton({ mealId }) {
    const router = useRouter()

    const handleClick = async () => {
        const error = await deleteMeal(mealId)
        router.push("/meal")
    }

    return <CustomButton textValue={"Delete Meal"} clickHandler={handleClick} />
}
