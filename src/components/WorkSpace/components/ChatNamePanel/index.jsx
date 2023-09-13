import './styles.scss';
import {useSelector} from "react-redux";

const ChatNamePanel = () => {
    const currentChat = useSelector(state => state.chatState.currentChat);
    const chatTitle = useSelector(state => state.chatState.chats).find((item) => item.id === currentChat)?.title || 'default';

    return (
        <div className="chat-name-container">
            { chatTitle }
        </div>
    );
}

export default ChatNamePanel;