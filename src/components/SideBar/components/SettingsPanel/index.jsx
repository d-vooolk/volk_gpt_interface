import './styles.scss';
import {ReactComponent as GptIcon} from "../../../../static/gptIcon.svg";
import {ReactComponent as MoreIcon} from "../../../../static/more.svg";
import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {Dropdown, Typography} from "antd";
import React, {useState} from "react";
import SettingsModal from "../SettingsModal";

const DropdownItem = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <SettingsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className="settings-item-wrapper" onClick={() => setIsModalOpen(true)}>
                <SettingsIcon className="settings-icon"/>
                <Typography className="dropdown-text"> Settings </Typography>
            </div>
        </>
    )
}

const items = [
    {
        key: '1modal',
        label: <DropdownItem />,
    }
];

const SettingsPanel = () => {
    return (
        <div className="settings-panel">
            <GptIcon className="gpt-icon"/>
            <span className="settings-panel-text">unregister user</span>
            <Dropdown
                menu={{items}}
                arrow={false}
                placement="top"
                trigger={['click']}
                overlayClassName="dropdown"
            >
                <MoreIcon className="more-icon"/>
            </Dropdown>
        </div>
    )
}

export default SettingsPanel;