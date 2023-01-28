import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
    name: "folderStatus",
    initialState: [
        {
            name: "myComputer",
            status: 0,
            collaps: false,
        },
        {
            name: "cv",
            status: 0,
            collaps: false,
        },
        {
            name: "contacts",
            status: 0,
            collaps: false,
        },
        {
            name: "portfolio",
            status: 0,
            collaps: false,
        },
        {
            name: "about",
            status: 0,
            collaps: false,
        },
    ],

    reducers: {
        openFolder(state, action) {
            const searchMinEl = (arr) => {
                let sortedArr = [];
                arr.map((item) => {
                    sortedArr.push(item.status);
                });
                return Math.max(...sortedArr) < 5
                    ? Math.max(...sortedArr) + 1
                    : 1;
            };

            switch (action.payload) {
                case "myComputer":
                    state[0].status = searchMinEl(state);
                    break;
                case "cv":
                    state[1].status = searchMinEl(state);
                    break;
                case "contacts":
                    state[2].status = searchMinEl(state);
                    break;
                case "portfolio":
                    state[3].status = searchMinEl(state);
                    break;
                case "about":
                    state[4].status = searchMinEl(state);
                    break;
            }
        },
        closeFolder(state, action) {
            switch (action.payload) {
                case "myComputer":
                    state[0].status = 0;
                    break;
                case "cv":
                    state[1].status = 0;
                    break;
                case "contacts":
                    state[2].status = 0;
                    break;
                case "portfolio":
                    state[3].status = 0;
                    break;
                case "about":
                    state[4].status = 0;
                    break;
            }
        },
        collapsFolder(state, action) {
            switch (action.payload) {
                case "myComputer":
                    state[0].collaps = true;
                    break;
                case "cv":
                    state[1].collaps = true;
                    break;
                case "contacts":
                    state[2].collaps = true;
                    break;
                case "portfolio":
                    state[3].collaps = true;
                    break;
                case "about":
                    state[4].collaps = true;
                    break;
            }
        },

        uncollapsFolder(state, action) {
            switch (action.payload) {
                case "myComputer":
                    state[0].collaps = false;
                    break;
                case "cv":
                    state[1].collaps = false;
                    break;
                case "contacts":
                    state[2].collaps = false;
                    break;
                case "portfolio":
                    state[3].collaps = false;
                    break;
                case "about":
                    state[4].collaps = false;
                    break;
            }
        },
    },
});

export const { openFolder, closeFolder, collapsFolder, uncollapsFolder } =
    folderSlice.actions;
export default folderSlice.reducer;
