import { createSlice } from "@reduxjs/toolkit";

const folderActiveSlice = createSlice({
    name: "folderActiveStatus",
    initialState: [false, false, false, false, false],

    reducers: {
        activeFolder(state, action) {
            state.map((item, ind) => {
                action.payload === ind
                    ? (state[ind] = true)
                    : (state[ind] = false);
            });
        },
        resetFolder(state) {
            state.map((item, ind) => {
                state[ind] = false;
            });
        },
    },
});

export const { activeFolder, resetFolder } = folderActiveSlice.actions;
export default folderActiveSlice.reducer;
