import { LoadingSpinner } from "@/components"

export default function FoodPageLoading() {
    return (
        <div className="h-full grid place-items-center dark:text-white">
            <LoadingSpinner size={16} />
        </div>
    )
}
