export default function CustomButton({ textValue, clickHandler }) {
    return (
        <button
            type="button"
            className="rounded-md bg-indigo-600 hover:bg-indigo-800 dark:bg-indigo-500 text-white p-2 my-2"
            onClick={(event) => clickHandler(event)}
        >
            {textValue}
        </button>
    )
}
