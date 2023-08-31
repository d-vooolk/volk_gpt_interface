import './styles.scss';
import SideBarOptions from "./components/SideBarOptions";
import SavedMessages from "./components/SavedMessages";

const testSaveMessages = [
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
    {text: "this is saved message from GPT. Please be patient and thanks for using"},
]

const SideBar = () => (
    <div className="sidebar">
        <SideBarOptions />
        <SavedMessages savedMessages={testSaveMessages} />
    </div>
);

export default SideBar;