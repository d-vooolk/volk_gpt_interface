import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import './index.scss';
import {useTheme} from "./hooks/useTheme";
import {ThemeContext} from "./context/ThemeContext";

function App() {
    const {theme, setTheme} = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="app-container">
                <SideBar/>
                <WorkSpace/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
