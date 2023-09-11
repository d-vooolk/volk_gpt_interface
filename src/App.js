import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import './index.scss';
import {useTheme} from "./hooks/useTheme";
import {ThemeContext} from "./context/ThemeContext";
import {IncognitoModeContext} from "./context/IncognitoModeContext";
import {useIncognitoMode} from "./hooks/useIncognitoMode";

function App() {
    const {theme, setTheme} = useTheme();
    const {incognitoMode, setIncognitoMode} = useIncognitoMode();

    return (
        <IncognitoModeContext.Provider value={{incognitoMode, setIncognitoMode}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className="app-container">
                    <SideBar/>
                    <WorkSpace/>
                </div>
            </ThemeContext.Provider>
        </IncognitoModeContext.Provider>
    );
}

export default App;
