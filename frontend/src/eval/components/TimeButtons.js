import {useState} from "react";

const TimeButtons = ({ lang, setLang }) => {

    const [currentLang] = useState(null);

    const langs = [
        "Java",
        "Python",
        "C#",
    ]


    const setNewLang = (newLang) => {

        if (newLang === 'C#') {
            newLang = 'csharp';
        }

        setLang(newLang.toLowerCase());
        console.log("newLang: ", newLang.toLowerCase())
        console.log("lang", lang)
    }

    return (
    <div className={"flex flex-col"}>
        {langs.map((newLang, index) => {
            return <button
                className={`
                ${lang === null || lang === newLang.toLowerCase() || (lang === 'csharp' && newLang === 'C#') ? 'bg-none text-white' : 'hover:text-gray-300 text-gray-500'} 
                hover:bg-indigo-500 font-medium py-2 px-4 rounded transition-colors duration-150`}
                key={index} onClick={() => setNewLang(newLang)}>{newLang}</button>
        })}
    </div>
  );
}

export default TimeButtons;