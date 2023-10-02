import './styles.scss';
import {ReactComponent as PlusIcon} from '../../../../static/plus.svg';
import {ReactComponent as SidebarIcon} from '../../../../static/sidebar.svg';
import {Tooltip} from "antd";
import {SIDEBAR_NEW_CHAT_TITLE} from "../../../../constants/textConstants";
import {addChat} from '../../../../redux/reducers/chatsSlice';
import {useDispatch} from "react-redux";

const SideBarOptions = ({isOpenSidebar, setIsOpenSidebar}) => {
    const dispatch = useDispatch();

    const addNewChat = () => dispatch(addChat());

    return (
        <div className="side-bar-option-wrapper">
            <div
                className="new-chat"
                onClick={addNewChat}
            >
                <PlusIcon className="plus-icon"/>
                <span className="new-chat-text">
                    {SIDEBAR_NEW_CHAT_TITLE}
                </span>
            </div>
            <Tooltip title={`${isOpenSidebar ? 'Close' : 'Open'} sidebar`} placement="right">
                <div
                    className="change-view-sidebar"
                    onClick={() => setIsOpenSidebar(false)}
                >
                    <SidebarIcon className="sidebar-icon"/>
                </div>
            </Tooltip>
        </div>
    )
};

export default SideBarOptions;