import React, {useEffect, useRef, useState} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/ext-searchbox";
import OutputArea from "./OutputArea";
import HelpButton from "./HelpButton";
import SettingsButton from "./SettingsButton";
import HelpModal from "./HelpModal";

const TextInput = ({ testActive, setOutput, setCode, output, code, lang }) => {

    const isVisible = lang !== null;
    const editorRef = useRef(null);
    const [runButtonText, setRunButtonText] = ["Run Code"];
    const [errorState, setErrorState] = useState(false);
    const [opValid, setOpValid] = useState(false);

    const defaultTexts = {
        python: "def main():\n    # Write Python code here\n",
        java: "public static void main(String[] args) {\n    // Write Java code here\n}",
        csharp: "public class Program {\n    public static void Main(string[] args) {\n        // Write C# code here\n    }\n}"
    };

    function onChange(newValue) {
        console.log("change", newValue);
        setCode(newValue)
    }

    useEffect(() => {
        // Set initial value when component mounts
        if (editorRef.current) {
            const defaultText = defaultTexts[lang] || "# Write your code here\n";
            editorRef.current.editor.setValue(defaultText, -1); // -1 sets the cursor at the end of the set value
        }
    }, [lang]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/code/run-${lang}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();

            if (data.success) {
                setOutput(data.op);
                setErrorState(false)
                setOpValid(true)
            } else {
                setOutput(data.error);
                setErrorState(true)
                setOpValid(false)
            }

        } catch (error) {
            console.error('Error sending axios request:', error);
        }
    }

    return (
        <div className={`${isVisible ? 'w-[800px] opacity-100' : 'w-0 opacity-0'} transition-all duration-200 space-y-3`}>
            <p>prompt: </p>
            <div className={""}>
                <div className={""}>
                    <AceEditor
                        ref={editorRef}
                        mode={lang}
                        theme="monokai"
                        onChange={onChange}
                        name="codebox"
                        editorProps={{ $blockScrolling: true }}
                        height="50vh"
                        width="100%"
                        fontSize={18}
                        placeholder={"Write your code here!"}
                    />
                </div>
            </div>
            <div className={"space-y-3 justify-center items-center"}>
                <div className={"flex space-x-5 justify-between"}>
                    <div>
                        <button onClick={fetchData}
                                className={"p-2 flex items-center transition-all duration-200 rounded-lg font-semibold hover:bg-indigo-600 bg-indigo-500"}>
                            {runButtonText} <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    <div className={"flex space-x-3 right-0"}>
                        <button disabled={!opValid} className={`${opValid ? 'opacity-100 hover:bg-yellow-400' : 'opacity-40'} p-2 transition-all duration-200 rounded-lg font-semibold bg-yellow-300`}>
                            Submit
                        </button>
                        <HelpButton />
                        <SettingsButton />
                    </div>
                </div>
                <OutputArea output={output} errorState={errorState}/>
            </div>
        </div>
    );
}

export default TextInput;
