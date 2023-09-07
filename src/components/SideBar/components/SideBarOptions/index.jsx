import './styles.scss';
import {ReactComponent as PlusIcon} from '../../../../static/plus.svg';
import {ReactComponent as SidebarIcon} from '../../../../static/sidebar.svg';
import {Tooltip} from "antd";
import {useState} from "react";

const SideBarOptions = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);

    return (
        <div className="side-bar-option-wrapper">
            <div className="new-chat">
                <PlusIcon className="plus-icon"/>
                <span className="new-chat-text">New chat</span>
            </div>
            <Tooltip title={`${isOpenSidebar ? 'Close' : 'Open'} sidebar`} placement="right">
                <div className="change-view-sidebar">
                    <SidebarIcon className="sidebar-icon"/>
                </div>
            </Tooltip>
        </div>
    )
};

export default SideBarOptions;