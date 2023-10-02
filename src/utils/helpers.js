export const checkLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}

export const getMaxUniqID = (chats) => {
    const maxId = Math.max(...chats.map(chat => chat.id));
    return maxId >= 0 ? maxId + 1 : 0;
}