import {useLayoutEffect, useState} from "react";

const localStorageChecked = () => {
    const storedValue = localStorage.getItem('incognito-mode');
    return storedValue ? JSON.parse(storedValue) : true;
}

export const useIncognitoMode = () => {
    const [incognitoMode, setIncognitoMode] = useState(localStorageChecked());

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-incognito-mode', String(!incognitoMode));
        localStorage.setItem('incognito-mode', JSON.stringify(incognitoMode));
    }, [incognitoMode]);

    return { incognitoMode, setIncognitoMode }
}