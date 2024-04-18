import {useState} from "react";
import TimeButtons from "./components/TimeButtons";
import TextInput from "./components/TextInput";

const Assessment = () => {

    const [output, setOutput] = useState(null);
    const [code, setCode] = useState(null);
    const [lang, setLang] = useState(null);
    const [timer, setTimer] = useState(null);
    const [testActive, setTestActive] = useState(false);
    const [generatedPrompt, setGeneratedPrompt] = useState(null);

    const debug = () => {
        console.log("lang: ", lang);
    }

    return (
            <div className={"flex items-center justify-center max-h-screen overflow-hidden"}>
                <TimeButtons lang={lang} setLang={setLang} setPrompt={setGeneratedPrompt} setTimer={setTimer} />
                <div className={`${lang !== null ? 'w-[1000px] opacity-100' : 'w-0 opacity-0'} transition-all duration-200`}>
                    <div className={"flex items-center justify-center space-x-3 transition-all duration-200"}>
                        <TextInput setOutput={setOutput} setTimer={setTimer} timer={timer} setGeneratedPrompt={setGeneratedPrompt} generatedPrompt={generatedPrompt} setCode={setCode} output={output} code={code} testActive={testActive} lang={lang} />
                    </div>
                </div>
            </div>
    );
}

export default Assessment