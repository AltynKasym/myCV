import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FolderActiveSlice from "./FolderActiveSlice";
import FolderSlice from "./FolderSlice";

const rootReducer = combineReducers({
    folder: FolderSlice,
    activeFolder: FolderActiveSlice,
});

export default configureStore({
    reducer: rootReducer,
});
