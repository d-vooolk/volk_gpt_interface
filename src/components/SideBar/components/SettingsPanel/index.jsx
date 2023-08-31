import './styles.scss';
import {ReactComponent as GptIcon} from "../../../../static/gptIcon.svg";
import {ReactComponent as MoreIcon} from "../../../../static/more.svg";
import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {Dropdown} from "antd";

const items = [
    {
        key: '1',
        label: (
            <div className="settings-item-wrapper">
                <SettingsIcon className="settings-icon" />
                <span> Settings </span>
            </div>
        ),
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