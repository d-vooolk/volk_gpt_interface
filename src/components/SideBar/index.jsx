import './styles.scss';
import SideBarOptions from "./components/SideBarOptions";
import SavedMessages from "./components/SavedMessages";
import SettingsPanel from "./components/SettingsPanel";

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

const SideBar = ({setTheme}) => (
    <div className="dark-sidebar">
        <SideBarOptions />
        <SavedMessages savedMessages={testSaveMessages} />
        <SettingsPanel setTheme={setTheme} />
    </div>
);

export default SideBar;