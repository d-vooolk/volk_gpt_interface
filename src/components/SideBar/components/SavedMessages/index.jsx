import './styles.scss';
import {ReactComponent as EditIcon} from "../../../../static/edit.svg";
import {ReactComponent as DeleteIcon} from "../../../../static/delete.svg";
import {ReactComponent as ChatIcon} from "../../../../static/chat.svg";
import {useContext, useState} from "react";
import IncognitoInfoPanel from "./components/IncognitoInfoPanel";
import {CurrentSettingsContext} from "../../../../context/UserSettingsContext";

const SavedMessages = ({savedMessages}) => {
    const [defaultActiveChat, setDefaultActiveChat] = useState(0);
    const {incognitoMode, setIncognitoMode} = useContext(CurrentSettingsContext);

    return (
        <div className="saved-chats-wrapper">
            {incognitoMode
                && <IncognitoInfoPanel
                    incognitoMode={incognitoMode}
                    setIncognitoMode={setIncognitoMode}
                />}
            {
                savedMessages.map((message, index) => (
                    <div
                        className={`${defaultActiveChat === index ? 'saved-messages-wrapper-active' : 'saved-messages-wrapper-inactive'}`}
                        onClick={() => setDefaultActiveChat(index)}
                        key={`${message + index * Math.random()}`}
                    >
                        <div
                            className={`${defaultActiveChat === index ? 'chat-text-wrapper-active' : 'chat-text-wrapper-inactive'}`}>
                            <ChatIcon className="chat-icon"/>
                            <span className="saved-messages-text">{message.text}</span>
                        </div>
                        {defaultActiveChat === index && (
                            <div className="icons-wrapper">
                                <EditIcon className="edit-icon"/>
                                <DeleteIcon className="delete-icon"/>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default SavedMessages;