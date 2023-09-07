export default function MealPreviewCard({ mealName, ingredients }) {
    return (
        <div className="border border-sky-950 rounded h-full p-2">
            <h1 className="text-xl text-center text-purple-800 my-2">
                {mealName}
            </h1>
            <div>
                {ingredients?.map((ingredient, index) => {
                    return (
                        <p key={index}>
                            {ingredient.count} x {ingredient.name}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
