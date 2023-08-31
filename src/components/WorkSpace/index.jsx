import './styles.scss';
import PlaceholderInfo from "./components/PlaceholderInfo";
import ChatNamePanel from "./components/ChatNamePanel";
import Annotation from "./components/Annotation";
import RequestInput from "./components/RequestInput";

const WorkSpace = () => (
    <div className="workspace">
        <ChatNamePanel />
        <PlaceholderInfo />
        <div className="input-container">
            <RequestInput />
            <Annotation />
        </div>
    </div>
);

export default WorkSpace;