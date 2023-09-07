export default function IngredientAddCard({ ingredientData, addIngredient }) {
    return (
        <div className="border border-sky-950 rounded p-2 grid grid-cols-6">
            <div className="col-span-5">
                <h1 className="text-xl mx-2">{ingredientData.description}</h1>
            </div>
            <button
                className="border rounded-md bg-purple-800 text-white px-4 py-2"
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
