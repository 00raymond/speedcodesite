import React, {useEffect, useRef} from 'react';
import AceEditor from "react-ace";

// Import necessary styles and modes for AceEditor
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/ext-searchbox";

const TextInput = ({ testActive, setOutput, setCode, output, code, lang }) => {

    const isVisible = lang !== null;
    const editorRef = useRef(null);

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
            setOutput(data.op);
        } catch (error) {
            console.error('Error sending axios request:', error);
        }
    }

    return (
        <div className={`${isVisible ? 'w-[800px] opacity-100' : 'w-0 opacity-0'} transition-all duration-200`}>
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
                <p>output</p>
            </div>
            <div>
                <button onClick={fetchData}>Run Code</button>
                <p>{output}</p>
            </div>
        </div>
    );
}

export default TextInput;
