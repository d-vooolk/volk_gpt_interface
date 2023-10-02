import {useLayoutEffect, useState} from "react";
import {checkLocalStorage} from "../utils/helpers";

export const useSidebarToggle = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(checkLocalStorage('is-open-sidebar', true));

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-is-open-sidebar', String(isOpenSidebar));
        localStorage.setItem('is-open-sidebar', JSON.stringify(isOpenSidebar));
    }, [isOpenSidebar]);

    return { isOpenSidebar, setIsOpenSidebar }
}