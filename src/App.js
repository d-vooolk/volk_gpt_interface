import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import './index.scss';
import UserSettingsContext from "./context/UserSettingsContext";

function App() {
    return (
        <UserSettingsContext>
            <div className="app-container">
                <SideBar/>
                <WorkSpace/>
            </div>
        </UserSettingsContext>
    );
}

export default App;
