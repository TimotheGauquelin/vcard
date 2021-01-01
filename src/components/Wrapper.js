import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../languages/fr-FR.json"
import English from "../languages/en-US.json"

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "fr-FR") {
    lang = French
} else {
    lang = English
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "fr-FR") {
            setMessages(French);
        } else {
            setMessages(English);
        }
    }

    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={local}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper;