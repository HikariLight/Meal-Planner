import IngredientCard from "./IngredientCard"

export default function MealItemsCard({ ingredients }) {
    return (
        <div>
            <h1 className="text-xl text-center text-indigo-600 my-2">
                Ingredients
            </h1>
            {ingredients.map((ingredient, index) => {
                return <IngredientCard foodData={ingredient} key={index} />
            })}
        </div>
    )
}
