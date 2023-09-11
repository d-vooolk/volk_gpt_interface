import React from "react";
import {useTheme} from "../hooks/useTheme";
import {useSidebarToggle} from "../hooks/useSidebarToggle";
import {useIncognitoMode} from "../hooks/useIncognitoMode";

export const CurrentSettingsContext = React.createContext();

const UserSettingsContext = ({ children }) => {
    const {theme, setTheme} = useTheme();
    const { isOpenSidebar, setIsOpenSidebar } = useSidebarToggle();
    const { incognitoMode, setIncognitoMode } = useIncognitoMode();

    return (
        <CurrentSettingsContext.Provider value={{
            theme, setTheme,
            isOpenSidebar, setIsOpenSidebar,
            incognitoMode, setIncognitoMode
        }}>
            { children }
        </CurrentSettingsContext.Provider>
    )
}

export default UserSettingsContext;