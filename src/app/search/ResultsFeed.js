import IngredientSearchCard from "./IngredientSearchCard"

export default async function ResultsFeed({ searchResults }) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {searchResults?.map((result, index) => {
                return <IngredientSearchCard foodData={result} key={index} />
            })}
        </div>
    )
}
