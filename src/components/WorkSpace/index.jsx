import './styles.scss';
import PlaceholderInfo from "./components/PlaceholderInfo";
import ChatNamePanel from "./components/ChatNamePanel";

const WorkSpace = () => (
    <div className="workspace">
        <ChatNamePanel />
        <PlaceholderInfo />
        // textareaComponent
        // annotationComponent
    </div>
);

export default WorkSpace;