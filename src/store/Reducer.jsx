import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FolderSlice from "./FolderSlice";

const rootReducer = combineReducers({
    folder: FolderSlice,
});

export default configureStore({
    reducer: FolderSlice,
});
