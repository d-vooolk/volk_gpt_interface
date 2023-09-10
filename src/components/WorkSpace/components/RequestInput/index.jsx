import "./styles.scss";
import {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {ReactComponent as SendButton} from '../../../../static/sendIcon.svg';
import {Tooltip} from "antd";

const RequestInput = () => {
    const [value, setValue] = useState('');
    const [isActiveSendButton, setIsActiveSendButton] = useState(false);

    const handleChange = (event) => setValue(event.target.value);
    const checkValue = (event) => setIsActiveSendButton(!!event.target.value);

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
                minRows={1}
                maxRows={8}
            />

            <Tooltip title="Send message" placement="bottom">
                <SendButton className={`${isActiveSendButton ? 'send-button-active' : 'send-button-inactive'}`}/>
            </Tooltip>
        </div>
    );
};

export default RequestInput;