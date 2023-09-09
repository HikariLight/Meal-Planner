export default function IngredientAddCard({ ingredientData, addIngredient }) {
    return (
        <div className="border border-indigo-700 rounded p-2 grid grid-cols-6">
            <div className="col-span-5">
                <h1 className="text-xl mx-2">{ingredientData.description}</h1>
            </div>
            <button
                className="border rounded-md bg-indigo-700 text-white px-4 py-2"
                onClick={() => {
                    addIngredient({
                        id: ingredientData.fdcId,
                        name: ingredientData.description,
                        count: 1,
                    })
                }}
            >
                Add
            </button>
        </div>
    )
}
