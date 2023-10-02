import {useSelector} from "react-redux";
import './styles.scss';
import {ReactComponent as GptIcon} from "../../../../static/gptIcon.svg";
import {USER_LITTER} from "../../../../constants/textConstants";
import {useEffect, useRef} from "react";

const ChatSpace = () => {
    const messagesWrapperRef = useRef(null);
    const currentChat = useSelector(state => state.chatState.currentChat);
    const currentMessages = useSelector(
        state => state.chatState.chats?.find(chat => chat.id === currentChat)?.messages
    ) || [];

    useEffect(() => {
        const container = messagesWrapperRef.current;
        container.scrollTop = container.scrollHeight;
    }, [currentMessages]);

    return (
        <div
            className="messages-area"
            ref={messagesWrapperRef}
        >
            {
                currentMessages.map(mess => (
                    <div
                        className={mess.type === 'user' ? 'user-message' : 'gpt-message'}
                        key={mess.index + String(Math.random())}
                    >
                        {
                            mess.type
                                ? <div className="avatar"> {USER_LITTER} </div>
                                : (
                                    <div className="gpt-avatar">
                                        <GptIcon/>
                                    </div>
                                )
                        }
                        <div className="message">{mess.message}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ChatSpace;