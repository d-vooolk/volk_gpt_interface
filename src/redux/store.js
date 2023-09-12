import { configureStore } from '@reduxjs/toolkit';
import savedChatReducer from './reducers/chatsSlice';

export default configureStore({
    reducer: {
        chatState: savedChatReducer,
    }
})