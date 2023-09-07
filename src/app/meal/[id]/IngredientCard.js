import Link from "next/link"

export default function IngredientCard({ foodData }) {
    return (
        <div className="w-full">
            <Link href={`/food/${foodData.id}`}>
                <div className="border border-purple-800 rounded p-2 my-2">
                    <h1 className="text-xl">
                        {foodData.count} x {foodData.name}
                    </h1>
                </div>
            </Link>
        </div>
    )
}
