import {useLayoutEffect, useState} from "react";
import {checkLocalStorage} from "../utils/helpers";

export const useIncognitoMode = () => {
    const [incognitoMode, setIncognitoMode] = useState(checkLocalStorage('incognito-mode', true));

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-incognito-mode', String(!incognitoMode));
        localStorage.setItem('incognito-mode', JSON.stringify(incognitoMode));
    }, [incognitoMode]);

    return { incognitoMode, setIncognitoMode }
}