import {useState} from "react";
import TimeButtons from "./components/TimeButtons";
import TextInput from "./components/TextInput";

const Assessment = () => {

    const [output, setOutput] = useState(null);
    const [code, setCode] = useState(null);
    const [lang, setLang] = useState(null);
    const [timer, setTimer] = useState(null);
    const [testActive, setTestActive] = useState(false);

    const debug = () => {
        console.log("lang: ", lang);
    }

    return (
        <div>
            <header>Practice Mode</header>
            <div className={"flex items-center justify-center"}>
                <TimeButtons lang={lang} setLang={setLang} />
                <div className={`${lang !== null ? 'w-[1000px] opacity-100' : 'w-0 opacity-0'} transition-all duration-200`}>
                    <div className={"flex items-center justify-center space-x-3 transition-all duration-200"}>
                        <TextInput setOutput={setOutput} setCode={setCode} output={output} code={code} testActive={testActive} lang={lang} />
                        <button onClick={debug}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Assessment