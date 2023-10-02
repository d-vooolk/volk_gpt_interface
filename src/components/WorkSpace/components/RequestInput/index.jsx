import "./styles.scss";
import {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {ReactComponent as SendButton} from '../../../../static/sendIcon.svg';
import {Tooltip} from "antd";
import {SEND_MESSAGE_TITLE} from "../../../../constants/textConstants";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, setCurrentChat} from "../../../../redux/reducers/chatsSlice";
import {isNumber} from "lodash";

const RequestInput = () => {
    const [value, setValue] = useState('');
    const [isActiveSendButton, setIsActiveSendButton] = useState(false);

    const dispatch = useDispatch();

    const currentChat = useSelector(state => state.chatState.currentChat);
    const chats = useSelector(state => state.chatState.chats)

    const handleChange = (event) => setValue(event.target.value);
    const checkValue = (event) => setIsActiveSendButton(!!event.target.value);

    const handleSend = () => {
        if (currentChat !== null && !chats.some(chat => chat.id === currentChat)) {
            dispatch(sendMessage({
                chatId: null,
                message: value
            }));
        } else {
            dispatch(sendMessage({
                chatId: isNumber(currentChat) ? currentChat : null,
                message: value
            }));
        }

        setValue('');
    }

    const keyDownHandle = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSend();
        }
    }

    return (
        <div className="input-wrapper">
            <TextareaAutosize
                name="requestInput"
                placeholder="Send a message"
                className="request-input"
                autoFocus
                value={value}
                onChange={handleChange}
                onInput={checkValue}
                onKeyDown={keyDownHandle}
                minRows={1}
                maxRows={8}
            />

            <Tooltip title={SEND_MESSAGE_TITLE} placement="bottom">
                <SendButton
                    className={`${isActiveSendButton ? 'send-button-active' : 'send-button-inactive'}`}
                    onClick={handleSend}
                />
            </Tooltip>
        </div>
    );
};

export default RequestInput;