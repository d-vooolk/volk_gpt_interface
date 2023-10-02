import './styles.scss';
import {ReactComponent as GptIcon} from "../../../../static/gptIcon.svg";
import {ReactComponent as MoreIcon} from "../../../../static/more.svg";
import {Dropdown} from "antd";
import React from "react";
import DropdownItem from "./DropdownItem";
import {WORK_PLACEHOLDER_TEXT} from "../../../../constants/textConstants";

const items = [{
    key: '1modal',
    label: <DropdownItem />,
}]

const SettingsPanel = () => {
    return (
        <div className="settings-panel">
            <GptIcon className="gpt-icon"/>
            <span className="settings-panel-text">
                { WORK_PLACEHOLDER_TEXT }
            </span>
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