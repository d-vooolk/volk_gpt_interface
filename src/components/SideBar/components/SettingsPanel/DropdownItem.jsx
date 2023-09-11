import React, {useState} from "react";
import SettingsModal from "../SettingsModal";
import {Typography} from "antd";
import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {DROPDOWN_SETTINGS_TITLE} from "../../../../constants/textConstants";

const DropdownItem = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <SettingsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <div className="settings-item-wrapper" onClick={() => setIsModalOpen(true)}>
                <SettingsIcon className="settings-icon"/>
                <Typography className="dropdown-text">
                    { DROPDOWN_SETTINGS_TITLE }
                </Typography>
            </div>
        </>
    )
};

export default DropdownItem;