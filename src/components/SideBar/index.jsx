import './styles.scss';
import SideBarOptions from "./components/SideBarOptions";
import SavedMessages from "./components/SavedMessages";
import SettingsPanel from "./components/SettingsPanel";
import {useContext} from "react";
import {CurrentSettingsContext} from "../../context/UserSettingsContext";

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
];

const SideBar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(CurrentSettingsContext);

    return (
        <div className="sidebar">
            <SideBarOptions
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
            <SavedMessages savedMessages={testSaveMessages}/>
            <SettingsPanel/>
        </div>
    )
};

export default SideBar;