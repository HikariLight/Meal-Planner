export default function MealCard({ mealData }) {
    return (
        <div className="border border-green-700 rounded p-2">
            <h1 className="text-xl">{mealData.name}</h1>
        </div>
    )
}
