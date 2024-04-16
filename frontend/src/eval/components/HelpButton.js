import { Fragment, useState} from "react";
import HelpModal from "./HelpModal";

const HelpButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <>
            <button
                onClick={() => {
                    toggleVisibility()
                }}
                    className={"bg-gray-600 p-2 rounded-lg hover:bg-gray-700 text-white font-semibold transition-all duration-200"}>

                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </button>
            {visible && <HelpModal onClose={toggleVisibility} />}
        </>
    )
}

export default HelpButton