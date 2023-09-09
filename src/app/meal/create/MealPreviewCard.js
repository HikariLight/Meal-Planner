export default function MealPreviewCard({ mealName, ingredients }) {
    return (
        <div className="border border-indigo-500 rounded h-full p-2">
            <h1 className="text-xl text-center text-indigo-700 dark:text-indigo-500 my-2">
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
