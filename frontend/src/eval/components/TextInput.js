import React from 'react';
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

const TextInput = ({ testActive, setWords, setCharacters, lang }) => {
    const isVisible = lang !== null;

    const langMode = lang === "java" ? "java" : lang === "python" ? "python" : lang === "javascript" ? "javascript" : lang === "c#" ? "csharp" : "text";

    function onChange(newValue) {
        console.log("change", newValue);
        setWords(newValue)
    }

    return (
        <div className={`${isVisible ? 'w-[800px] opacity-100' : 'w-0 opacity-0'} transition-all duration-200`}>
            <p>prompt: </p>
            <div className={""}>
                <div className={""}>
                    <AceEditor
                        mode={langMode}
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
            <button>Submit</button>
        </div>
    );
}

export default TextInput;
