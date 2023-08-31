import './styles.scss';
import {ReactComponent as EditIcon} from "../../../../static/edit.svg";
import {ReactComponent as DeleteIcon} from "../../../../static/delete.svg";
import {ReactComponent as ChatIcon} from "../../../../static/chat.svg";
import {useState} from "react";

const SavedMessages = (props) => {
    const {savedMessages} = props;
    const [defaultActiveChat, setDefaultActiveChat] = useState(0);

    return (
        <div className="saved-chats-wrapper">
            {
                savedMessages.map((message, index) => (
                    <div
                        className={`${defaultActiveChat === index ? 'saved-messages-wrapper-active' : 'saved-messages-wrapper-inactive'}`}
                        onClick={() => setDefaultActiveChat(index)}
                    >
                        <div className={`${defaultActiveChat === index ? 'chat-text-wrapper-active' : 'chat-text-wrapper-inactive'}`}>
                            <ChatIcon className="chat-icon"/>
                            <span className="saved-messages-text">{message.text}</span>
                        </div>
                        {
                            defaultActiveChat === index ? (
                                    <div className="icons-wrapper">
                                        <EditIcon className="edit-icon"/>
                                        <DeleteIcon className="delete-icon"/>
                                    </div>
                                )
                                : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SavedMessages;