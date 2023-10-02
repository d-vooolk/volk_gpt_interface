import './styles.scss';
import {ReactComponent as EditIcon} from "../../../../static/edit.svg";
import {ReactComponent as DeleteIcon} from "../../../../static/delete.svg";
import {ReactComponent as ChatIcon} from "../../../../static/chat.svg";
import {useContext} from "react";
import IncognitoInfoPanel from "./components/IncognitoInfoPanel";
import {CurrentSettingsContext} from "../../../../context/UserSettingsContext";
import {useDispatch, useSelector} from "react-redux";
import {deleteChat, editChatTitle, setCurrentChat} from "../../../../redux/reducers/chatsSlice";

const SavedMessages = () => {
    const {incognitoMode, setIncognitoMode} = useContext(CurrentSettingsContext);
    const dispatch = useDispatch();

    const savedMessages = useSelector(store => store.chatState.chats);
    const currentChat = useSelector(state => state.chatState.currentChat);
    const chatsLength = useSelector(state => state.chatState.chatsLength);

    console.log('chatsLength', chatsLength);

    const toggleChatHandle = (id) => {
        dispatch(setCurrentChat({ id }))
    }

    const handleEditChatTitle = (id) => dispatch(editChatTitle({id, title: 'hello'}));
    const handleDeleteChat = (id) => {
        dispatch(deleteChat({id}));
    }

    return (
        <div className="saved-chats-wrapper">
            {incognitoMode
                && <IncognitoInfoPanel
                    incognitoMode={incognitoMode}
                    setIncognitoMode={setIncognitoMode}
                />}
            {
                savedMessages.map((chat) => (
                    <div
                        className={`${currentChat === chat.id ? 'saved-messages-wrapper-active' : 'saved-messages-wrapper-inactive'}`}
                        onClick={() => toggleChatHandle(chat.id)}
                        key={`${chat.id + Math.random()}`}
                    >
                        <div
                            className={`${currentChat === chat.id ? 'chat-text-wrapper-active' : 'chat-text-wrapper-inactive'}`}>
                            <ChatIcon className="chat-icon"/>
                            <span className="saved-messages-text">{chat.title}</span>
                        </div>
                        {currentChat === chat.id && (
                            <div className="icons-wrapper">
                                <EditIcon
                                    className="edit-icon"
                                    onClick={() => handleEditChatTitle(chat.id)}
                                />
                                <DeleteIcon
                                    className="delete-icon"
                                    onClick={() => handleDeleteChat(chat.id)}
                                />
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default SavedMessages;