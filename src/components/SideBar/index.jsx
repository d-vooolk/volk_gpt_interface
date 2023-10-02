import './styles.scss';
import SideBarOptions from "./components/SideBarOptions";
import SavedMessages from "./components/SavedMessages";
import SettingsPanel from "./components/SettingsPanel";
import {useContext} from "react";
import {CurrentSettingsContext} from "../../context/UserSettingsContext";

const SideBar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(CurrentSettingsContext);

    return (
        <div className="sidebar">
            <SideBarOptions
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
            <SavedMessages/>
            <SettingsPanel/>
        </div>
    )
};

export default SideBar;