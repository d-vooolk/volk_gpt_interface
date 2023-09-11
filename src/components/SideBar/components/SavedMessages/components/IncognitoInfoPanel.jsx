import {
    ENABLE_CHAT_HISTORY_TITLE,
    INCOGNITO_INFO_DESCRIPTION,
    INCOGNITO_INFO_HEADER
} from "../../../../../constants/textConstants";
import {Button} from "antd";
import {ReactComponent as PowerIcon} from "../../../../../static/power.svg";

const IncognitoInfoPanel = ({ incognitoMode, setIncognitoMode }) => (
    <div className="incognito-info-wrapper">
        <div className="incognito-info">
            <span className="incognito-info-title">{INCOGNITO_INFO_HEADER}</span>
            <span className="incognito-info-description">{INCOGNITO_INFO_DESCRIPTION}</span>
            <Button
                className="incognito-button"
                onClick={() => setIncognitoMode(!incognitoMode)}
            >
                <PowerIcon />
                { ENABLE_CHAT_HISTORY_TITLE }
            </Button>
        </div>
        <div className="incognito-info-gradient"></div>
        <div className="background"></div>
    </div>
);

export default IncognitoInfoPanel;