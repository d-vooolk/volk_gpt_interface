import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import './index.scss';
import {DARK_THEME, LIGHT_THEME, SYSTEM_THEME_KEY} from "./constants/colorTheme";
import {useEffect, useState} from "react";
import {checkTheme} from "./helpers/themeHelpers";

function App() {
    const [theme, setTheme] = useState(checkTheme());
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    useEffect(() => {
        setTheme(checkTheme())
    }, [checkTheme()])

    if (prefersDarkScheme.matches) {
        sessionStorage.setItem(SYSTEM_THEME_KEY, DARK_THEME)
    } else {
        sessionStorage.setItem(SYSTEM_THEME_KEY, LIGHT_THEME)
    }

    return (
        <div className="app-container">
            <SideBar setTheme={setTheme}/>
            <WorkSpace/>
        </div>
    );
}

export default App;
