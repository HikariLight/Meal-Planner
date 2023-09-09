export default function AboutPage() {
    return (
        <div className="text-white">
            <h1 className="text-2xl text-center uppercase my-2 text-indigo-700 dark:text-indigo-500">
                About Page
            </h1>
            <ul className="flex flex-col space-y-2">
                <li>Meal Planner was made using NextJS 13 and Supabase</li>
                <li>
                    The main goal is to be able to make conscious and educated
                    decisions about one's eating habits and diet, by being able
                    to create the meals one eats throughout the week and
                    visualising their nutritional data when aggregated.
                </li>
                <li>
                    All the nutritional data comes from the United States
                    Department of Agriculture's{" "}
                    <span>
                        <a
                            className="text-indigo-500"
                            href="https://fdc.nal.usda.gov/api-guide.html"
                        >
                            FoodData Central database
                        </a>
                    </span>
                    .
                </li>
            </ul>
        </div>
    )
}
