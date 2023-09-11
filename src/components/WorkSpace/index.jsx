import './styles.scss';
import PlaceholderInfo from "./components/PlaceholderInfo";
import ChatNamePanel from "./components/ChatNamePanel";
import Annotation from "./components/Annotation";
import RequestInput from "./components/RequestInput";
import {ReactComponent as SidebarIcon} from "../../static/sidebar.svg";
import {useContext} from "react";
import {CurrentSettingsContext} from "../../context/UserSettingsContext";

const WorkSpace = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(CurrentSettingsContext);

    return (
        <div className="workspace">
            {
                !isOpenSidebar
                ? (
                    <div
                        className="sidebar-icon-wrapper"
                        onClick={() => {setIsOpenSidebar(true)}}
                    >
                        <SidebarIcon className="sidebar-icon" />
                    </div>
                )
                    : null
            }
            <ChatNamePanel />
            <PlaceholderInfo />
            <div className="input-container">
                <RequestInput />
                <Annotation />
            </div>
        </div>
    );
}

export default WorkSpace;