import React from 'react';
import HelpButton from "./HelpButton";

const HelpModal = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 transition-all duration-200 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-gray-600 opacity-90 p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-lg mb-2">Guide</h2>
                <p>Select the language you are most </p>
                <p className={"mb-1"}>comfortable with on the left.</p>
                <p>Use the Run button to compile</p>
                <p className={"mb-1"}>your code and see the output below.</p>
                <p>If you believe the output satisfies the</p>
                <p className={"mb-1"}>prompt, press Submit to see your score.</p>
                <button onClick={onClose} className="transition-all duration-200 bg-gray-500 hover:bg-gray-700 text-white font-semibold text-xl p-1 px-2 rounded">
                    Close
                </button>
            </div>
        </div>
    )
}
export default HelpModal;