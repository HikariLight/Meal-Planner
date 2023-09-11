import Link from "next/link"

export default function IngredientSearchCard({ foodData }) {
    return (
        <div className="max-h-48 text-white">
            <Link href={`/food/${foodData.fdcId}`}>
                <div className="border border-indigo-700 dark:border-indigo-500 rounded p-2 my-2">
                    <h1 className="text-xl">{foodData.description}</h1>
                </div>
            </Link>
        </div>
    )
}
