import {createSlice} from "@reduxjs/toolkit";
import {MESSAGE_TYPE_GPT, MESSAGE_TYPE_USER, NEW_CHAT_TITLE} from "../../constants/textConstants";
import {isNumber} from "lodash";
import {getMaxUniqID} from "../../utils/helpers";

export const chatsSlice = createSlice({
    name: 'savedChats',
    initialState: {
        chats: [
            {
                id: 2,
                title: 'Title of new chat 3',
                messages: [
                    {
                        id: 0,
                        message: "USER this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_USER
                    },
                    {
                        id: 1,
                        message: "GPT this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_GPT
                    },
                ],
            },
            {
                id: 1,
                title: 'Title of new chat 2',
                messages: [
                    {
                        id: 0,
                        message: "USER this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_USER
                    },
                    {
                        id: 1,
                        message: "GPT this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_GPT
                    },
                ],
            },
            {
                id: 0,
                title: 'Title of new chat 1',
                messages: [
                    {
                        id: 0,
                        message: "USER this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_USER
                    },
                    {
                        id: 1,
                        message: "GPT this is saved message from GPT. Please be patient and thanks for using",
                        type: MESSAGE_TYPE_GPT
                    },
                ],
            },
        ],
        currentChat: null,
    },

    reducers: {
        /* CHAT ACTIONS */

        addChat (state) {
            const currentId = getMaxUniqID(state.chats);

            state.chats.unshift(
                {
                    id: currentId,
                    title: NEW_CHAT_TITLE,
                    messages: [],
                }
            );
            state.currentChat = currentId;
        },

        editChatTitle (state, action) {
            const currentChat = state.chats.find(chat => chat.id === action.payload.id);
            currentChat.title = action.payload.title;
        },

        deleteChat (state, action) {
            state.chats = state.chats.filter(chat => chat.id !== action.payload.id);
            state.currentChat = null;
        },

        setCurrentChat (state, action) {
            state.currentChat = action.payload.id;
        },



        /* MESSAGE ACTIONS */

        sendMessage (state, action) {
            const chatId = getMaxUniqID(state.chats);

            if (isNumber(action.payload.chatId)) {
                const currentChat = state.chats.find(chat => chat.id === action.payload.chatId);
                currentChat.messages.push(
                    {
                        id: currentChat.messages.length,
                        message: action.payload.message,
                        type: MESSAGE_TYPE_USER
                    }
                );
            } else {
                state.chats.unshift({
                        id: chatId,
                        title: NEW_CHAT_TITLE,
                        messages: [
                            {
                                id: 0,
                                message: action.payload.message,
                                type: MESSAGE_TYPE_USER
                            }
                        ]}
                );
                state.currentChat = chatId;
            }
        },
    }
});

export const {
    addChat,
    editChatTitle,
    deleteChat,
    setCurrentChat,
    sendMessage,
} = chatsSlice.actions;

export default chatsSlice.reducer;