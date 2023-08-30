import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import './index.scss';

function App() {
    return (
        <div className="app-container">
            <SideBar/>
            <WorkSpace/>
        </div>
    );
}

export default App;
