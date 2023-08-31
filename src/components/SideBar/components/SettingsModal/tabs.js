import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {ReactComponent as DataControlsIcon} from "../../../../static/dataControls.svg";

export const modalTabs = [
    {
        label: (
            <div className="tabs-label">
                <SettingsIcon className="settings-icon" />
                <span>General</span>
            </div>
        ),
        key: 1,
        children: `Content of tab `,
    },
    {
        label: (
            <div className="tabs-label">
                <DataControlsIcon />
                <span>Data controls</span>
            </div>
        ),
        key: 2,
        children: `Content of tab `,
    }
]