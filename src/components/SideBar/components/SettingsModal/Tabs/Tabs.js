import {ReactComponent as SettingsIcon} from "../../../../../static/settings.svg";
import {ReactComponent as DataControlsIcon} from "../../../../../static/dataControls.svg";
import {Typography} from "antd";
import React from "react";
import '../styles.scss';
import DataControls from "./DataControls";
import GeneralSettings from "./GeneralSettings";
import {DATA_CONTROLS_TAB_TITLE, GENERAL_TAB_TITLE} from "../../../../../constants/textConstants";

export const modalTabs = [
    {
        label: (
            <div className="tabs-label">
                <SettingsIcon className="settings-icon"/>
                <Typography className="dark-tab-text">
                    { GENERAL_TAB_TITLE }
                </Typography>
            </div>
        ),
        key: 'generalSettingsKey',
        children: <GeneralSettings/>,
    },
    {
        label: (
            <div className="tabs-label data-controls">
                <DataControlsIcon/>
                <Typography className="settings-icon">
                    { DATA_CONTROLS_TAB_TITLE }
                </Typography>
            </div>
        ),
        key: 'DataControlsSettingsKey',
        children: <DataControls/>,
    }
];