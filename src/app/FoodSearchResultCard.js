import Link from "next/link"

export default function FoodSearchResultCard({ foodData }) {
    return (
        <Link href={`/food/${foodData.fdcId}`}>
            <div className="border border-purple-800 rounded p-2">
                <h1 className="text-xl">{foodData.description}</h1>
            </div>
        </Link>
    )
}
