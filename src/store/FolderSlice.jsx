import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
    name: "folderStatus",
    initialState: [
        {
            name: "myComputer",
            status: 0,
            minimize: false,
        },
        {
            name: "cv",
            status: 0,
            minimize: false,
        },
        {
            name: "contacts",
            status: 0,
            minimize: false,
        },
    ],

    reducers: {
        openFolder(state, action) {
            const initialValue = state.reduce(
                (acc, value) => acc + value.status,
                0
            );
            switch (action.payload) {
                case "MyComputer":
                    state[0].status = state.reduce(
                        (acc, value) => acc + value.status,
                        initialValue > 2 ? 0 : 1
                    );
                    break;
                case "cv":
                    state[1].status = state.reduce(
                        (acc, value) => acc + value.status,
                        initialValue > 2 ? 0 : 1
                    );
                    break;
                case "contacts":
                    state[2].status = state.reduce(
                        (acc, value) => acc + value.status,
                        initialValue > 2 ? 0 : 1
                    );
                    break;
            }
        },
        closeFolder(state, action) {
            switch (action.payload) {
                case "MyComputer":
                    state[0].status = 0;
                    break;
                case "cv":
                    state[1].status = 0;
                    break;
                case "contacts":
                    state[2].status = 0;
                    break;
            }
        },
    },
});

export const { openFolder, closeFolder } = folderSlice.actions;
export default folderSlice.reducer;
