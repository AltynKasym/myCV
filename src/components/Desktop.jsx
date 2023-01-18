import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import ResumeImage from "../assets/media/images/resume.ico";
import RecycleImage from "../assets/media/images/Recycle.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import OpenedWindow from "./MyComp";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import CV from "./CV";
import styled from "styled-components";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import {
    closeFolder,
    collapsFolder,
    openFolder,
    uncollapsFolder,
} from "../store/FolderSlice";
import MyComp from "./MyComp";
import {
    collapsContact,
    collapsCV,
    collapsMyComp,
    showContact,
    showCV,
    showFolder,
} from "../store/Actions";

function Desktop() {
    const dispatch = useDispatch();
    const folder = useSelector((folder) => folder);

    const winQueue = [false, false, false];
    const [active, setActive] = useState(winQueue);
    function activeWindow(id) {
        winQueue.forEach((item, ind) => {
            id === ind ? (winQueue[ind] = true) : (winQueue[ind] = false);
        });
        setActive(winQueue);
    }

    const [myCompStatus, cvStatus, contactStatus] = [
        folder[0].status,
        folder[1].status,
        folder[2].status,
    ];
    const [myCompCollaps, cvCollaps, contactCollaps] = [
        folder[0].collaps,
        folder[1].collaps,
        folder[2].collaps,
    ];

    const showFolder = () => {
        myCompStatus
            ? dispatch(closeFolder("MyComputer"))
            : dispatch(openFolder("MyComputer"));
    };

    const showCV = () => {
        cvStatus ? dispatch(closeFolder("cv")) : dispatch(openFolder("cv"));
    };

    const showContact = () => {
        contactStatus
            ? dispatch(closeFolder("contacts"))
            : dispatch(openFolder("contacts"));
    };
    const collapsContact = () => {
        contactCollaps
            ? dispatch(uncollapsFolder("contacts"))
            : dispatch(collapsFolder("contacts"));
    };
    const collapsCV = () => {
        cvCollaps
            ? dispatch(uncollapsFolder("cv"))
            : dispatch(collapsFolder("cv"));
    };
    const collapsMyComp = () => {
        myCompCollaps
            ? dispatch(uncollapsFolder("MyComputer"))
            : dispatch(collapsFolder("MyComputer"));
    };

    function createFolder(src, name) {
        return (
            <div className="label">
                <figure className="figure">
                    <img className="label__img" src={src} alt={name} />
                    <figcaption>{name}</figcaption>
                </figure>
            </div>
        );
    }

    // const [isCollaps, setIsCollaps] = useState(false);
    // const toCollaps = () => {
    //     setIsCollaps((prev) => !prev);
    // };

    useEffect(() => {
        if (myCompStatus === "false") winQueue[0] = false;
        if (!cvStatus) winQueue[1] = false;
        if (!contactStatus) winQueue[2] = false;
    }, [myCompStatus, cvStatus, contactStatus]);

    return (
        <div className="labels">
            <div onDoubleClick={showFolder}>
                {createFolder(MyComputerImage, "Мой компьютер")}
            </div>
            {createFolder(FolderImage, "Портфолио")}
            <div onDoubleClick={showCV}>
                {createFolder(ResumeImage, "Резюме")}
            </div>
            <div onDoubleClick={showContact}>
                {createFolder(ExplorerImage, "Контакты")}
            </div>
            {createFolder(RecycleImage, "Recycle Bin")}
            <div
                style={
                    active[0]
                        ? { zIndex: "999" }
                        : { zIndex: `${myCompStatus + 10}` }
                }
                onClick={() => activeWindow(0)}
            >
                <MyComp
                    show={myCompStatus}
                    setShow={showFolder}
                    collaps={collapsMyComp}
                    myCompCollaps={myCompCollaps}
                />
            </div>
            <div
                style={
                    active[1]
                        ? { zIndex: "999" }
                        : { zIndex: `${cvStatus + 10}` }
                }
                onClick={() => activeWindow(1)}
            >
                <CV
                    show={cvStatus}
                    setShow={showCV}
                    collaps={collapsCV}
                    cvCollaps={cvCollaps}
                />
            </div>
            <div
                style={
                    active[2]
                        ? { zIndex: "999" }
                        : { zIndex: `${contactStatus + 10}` }
                }
                onClick={() => activeWindow(2)}
            >
                <Contact
                    show={contactStatus}
                    setShow={showContact}
                    onClick={activeWindow}
                    collaps={collapsContact}
                    contactCollaps={contactCollaps}
                />
            </div>
            {/* <Wrapper onMouseDown={add} onMouseUp={remove} /> */}
        </div>
    );
}

export default Desktop;
