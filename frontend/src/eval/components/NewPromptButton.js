import {useState} from "react";

const NewPromptButton = () => {

    return (
        <button
            className={"bg-purple-600 hover:bg-purple-800 p-2 rounded-lg text-white font-semibold transition-all duration-200"}
        >
            <svg className={` w-8 h-8 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
            </svg>
        </button>
    )
}

export default NewPromptButton