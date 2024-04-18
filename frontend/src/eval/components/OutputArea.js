import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-monokai'; // Import the mode you need
import 'ace-builds/src-noconflict/mode-json5'; // Import a theme
const OutputArea = ({ output, errorState, outputRef }) => {
    return (
        <div className={`${errorState ? 'border-2 border-red-800 rounded-sm border-dotted' : ''}`}>
            <AceEditor
                ref={outputRef}
                mode="json5"
                theme="monokai"
                placeholder={'Output will be displayed here'}
                value={output}
                readOnly={true}
                fontSize={18}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={false}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
                style={{ width: '100%', height: '100px' }}
            />
        </div>
    );
};

export default OutputArea;
