export default function NutritionalInfoCard({ foodData }) {
    return (
        <div className="grid grid-cols-3">
            {foodData.foodNutrients.map((data, index) => {
                return (
                    <h3 key={index}>
                        {data.nutrient.name}: {data.nutrient.number}
                        {data.nutrient.unitName}
                    </h3>
                )
            })}
        </div>
    )
}
