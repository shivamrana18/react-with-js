import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/slice';

const store = configureStore({
    reducer: todoReducer
})

export default store