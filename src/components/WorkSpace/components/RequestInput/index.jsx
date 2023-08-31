import "./styles.scss";
import {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';

const RequestInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="input-wrapper">
            <TextareaAutosize
                name="requestInput"
                placeholder="Send a message"
                className="request-input"
                autoFocus
                value={value}
                onChange={handleChange}
                minRows={1}
                maxRows={8}
            />
        </div>
    );
};

export default RequestInput;