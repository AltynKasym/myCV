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
    },
});

export const { activeFolder } = folderActiveSlice.actions;
export default folderActiveSlice.reducer;
