import './styles.scss';
import {ReactComponent as GptIcon} from "../../../../static/gptIcon.svg";
import {ReactComponent as MoreIcon} from "../../../../static/more.svg";
import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {Dropdown, Typography} from "antd";
import React, {useState} from "react";
import SettingsModal from "../SettingsModal";

const DropdownItem = ({setTheme}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <SettingsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setTheme={setTheme}
            />
            <div className="settings-item-wrapper" onClick={() => setIsModalOpen(true)}>
                <SettingsIcon className="settings-icon"/>
                <Typography className="dropdown-text"> Settings </Typography>
            </div>
        </>
    )
}

const itemHandler = (setTheme) => {
    return ({
        items: [{
                key: '1modal',
                label: <DropdownItem setTheme={setTheme}/>,
            }],
    })
}

const SettingsPanel = ({setTheme}) => {
    return (
        <div className="settings-panel">
            <GptIcon className="gpt-icon"/>
            <span className="settings-panel-text">unregister user</span>
            <Dropdown
                menu={itemHandler(setTheme)}
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