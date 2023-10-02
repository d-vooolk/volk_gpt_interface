import './styles.scss';
import PlaceholderInfo from "./components/PlaceholderInfo";
import ChatNamePanel from "./components/ChatNamePanel";
import Annotation from "./components/Annotation";
import RequestInput from "./components/RequestInput";
import {ReactComponent as SidebarIcon} from "../../static/sidebar.svg";
import {useContext, useEffect, useState} from "react";
import {CurrentSettingsContext} from "../../context/UserSettingsContext";
import ChatSpace from "./components/ChatSpace";
import {useSelector} from "react-redux";

const WorkSpace = () => {
    const [isChatSessionEnabled, setIsChatSessionEnabled] = useState(false);
    const {isOpenSidebar, setIsOpenSidebar} = useContext(CurrentSettingsContext);
    const currentChat = useSelector(state => state.chatState.currentChat);

    useEffect(() => {
        if (currentChat) {
            setIsChatSessionEnabled(true);
        }
    }, [currentChat]);

    return (
        <div className="workspace">
            {
                !isOpenSidebar
                    ? (
                        <div
                            className="sidebar-icon-wrapper"
                            onClick={() => {
                                setIsOpenSidebar(true)
                            }}
                        >
                            <SidebarIcon className="sidebar-icon"/>
                        </div>
                    )
                    : null
            }
            <ChatNamePanel/>

            {
                isChatSessionEnabled
                    ? <ChatSpace/>
                    : <PlaceholderInfo/>
            }

            <div className="input-container">
                <RequestInput setIsChatSessionEnabled={setIsChatSessionEnabled}/>
                <Annotation/>
            </div>
        </div>
    );
}

export default WorkSpace;