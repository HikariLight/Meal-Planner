export default function MealCard({ mealData }) {
    return (
        <div className="border border-indigo-800 rounded p-2 shadow hover:shadow-xl">
            <h1 className="text-xl">{mealData.name}</h1>
        </div>
    )
}
