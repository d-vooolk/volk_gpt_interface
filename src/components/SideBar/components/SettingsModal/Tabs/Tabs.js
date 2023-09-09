import {ReactComponent as SettingsIcon} from "../../../../../static/settings.svg";
import {ReactComponent as DataControlsIcon} from "../../../../../static/dataControls.svg";
import {Typography} from "antd";
import React from "react";
import '../styles.scss';
import DataControls from "./DataControls";
import GeneralSettings from "./GeneralSettings";

export const modalTabs = [
    {
        label: (
            <div className="tabs-label">
                <SettingsIcon className="settings-icon"/>
                <Typography className="dark-tab-text">General</Typography>
            </div>
        ),
        key: 'generalSettingsKey',
        children: <GeneralSettings/>,
    },
    {
        label: (
            <div className="tabs-label data-controls">
                <DataControlsIcon/>
                <Typography className="settings-icon">Data controls</Typography>
            </div>
        ),
        key: 'DataControlsSettingsKey',
        children: <DataControls/>,
    }
];