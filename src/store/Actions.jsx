// import { useDispatch, useSelector } from "react-redux";
// import {
//     closeFolder,
//     collapsFolder,
//     openFolder,
//     uncollapsFolder,
// } from "./FolderSlice";

// export const dispatch = useDispatch();
// export const folder = useSelector((folder) => folder);
// export const [myCompStatus, cvStatus, contactStatus] = [
//     folder[0].status,
//     folder[1].status,
//     folder[2].status,
// ];
// export const [myCompCollaps, cvCollaps, contactCollaps] = [
//     folder[0].collaps,
//     folder[1].collaps,
//     folder[2].collaps,
// ];
// export const showFolder = () => {
//     myCompStatus
//         ? dispatch(closeFolder("MyComputer"))
//         : dispatch(openFolder("MyComputer"));
// };

// export const showCV = () => {
//     cvStatus ? dispatch(closeFolder("cv")) : dispatch(openFolder("cv"));
// };

// export const showContact = () => {
//     contactStatus
//         ? dispatch(closeFolder("contacts"))
//         : dispatch(openFolder("contacts"));
// };
// export const collapsContact = () => {
//     contactCollaps
//         ? dispatch(uncollapsFolder("contacts"))
//         : dispatch(collapsFolder("contacts"));
// };
// export const collapsCV = () => {
//     cvCollaps ? dispatch(uncollapsFolder("cv")) : dispatch(collapsFolder("cv"));
// };
// export const collapsMyComp = () => {
//     myCompCollaps
//         ? dispatch(uncollapsFolder("MyComputer"))
//         : dispatch(collapsFolder("MyComputer"));
// };
