import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import ResumeImage from "../assets/media/images/resume.ico";
import InfoImage from "../assets/media/images/info.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import { useEffect, useRef, useState } from "react";
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

import Portfolio from "./Portfolio";
import About from "./About";
import { activeFolder, resetFolder } from "../store/FolderActiveSlice";
import Draggable from "react-draggable";

const Wrapper = styled.div`
    /* position: absolute;
    top: 50px; */
    z-index: ${(props) => (props.status ? "999" : `${props.window + 10}`)};
`;

function Desktop() {
    const dispatch = useDispatch();
    const store = useSelector((folder) => folder);
    const [
        myCompStatus,
        cvStatus,
        contactStatus,
        portfolioStatus,
        aboutStatus,
    ] = [
        store.folder[0].status,
        store.folder[1].status,
        store.folder[2].status,
        store.folder[3].status,
        store.folder[4].status,
    ];
    const [
        myCompCollaps,
        cvCollaps,
        contactCollaps,
        portfolioCollaps,
        aboutCollaps,
    ] = [
        store.folder[0].collaps,
        store.folder[1].collaps,
        store.folder[2].collaps,
        store.folder[3].collaps,
        store.folder[4].collaps,
    ];

    function dispatchClose(status, name) {
        return function () {
            status ? dispatch(closeFolder(name)) : dispatch(openFolder(name));
        };
    }
    function dispatchCollaps(status, name) {
        return function () {
            status
                ? dispatch(uncollapsFolder(name))
                : dispatch(collapsFolder(name));
        };
    }
    const showMyComp = dispatchClose(myCompStatus, "myComputer");
    const showCV = dispatchClose(cvStatus, "cv");
    const showContact = dispatchClose(contactStatus, "contacts");
    const showPortfolio = dispatchClose(portfolioStatus, "portfolio");
    const showAbout = dispatchClose(aboutStatus, "about");

    const collapsMyComp = dispatchCollaps(myCompCollaps, "myComputer");
    const collapsCV = dispatchCollaps(cvCollaps, "cv");
    const collapsContact = dispatchCollaps(contactCollaps, "contacts");
    const collapsPortfolio = dispatchCollaps(portfolioCollaps, "portfolio");
    const collapsAbout = dispatchCollaps(aboutCollaps, "about");

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

    function activeWindow(ind) {
        dispatch(activeFolder(ind));
    }

    useEffect(() => {
        dispatch(resetFolder());
        if (!myCompStatus) {
            dispatch(uncollapsFolder("myComputer"));
        }
        if (!cvStatus) {
            dispatch(uncollapsFolder("cv"));
        }
        if (!contactStatus) {
            dispatch(uncollapsFolder("contacts"));
        }
        if (!portfolioStatus) {
            dispatch(uncollapsFolder("portfolio"));
        }
        if (!aboutStatus) {
            dispatch(uncollapsFolder("about"));
        }
    }, [myCompStatus, cvStatus, contactStatus, portfolioStatus, aboutStatus]);

    return (
        <div className="labels">
            <div onDoubleClick={showMyComp}>
                {createFolder(MyComputerImage, "Мой компьютер")}
            </div>
            <div onDoubleClick={showCV}>
                {createFolder(ResumeImage, "Резюме")}
            </div>
            <div onDoubleClick={showPortfolio}>
                {createFolder(FolderImage, "Портфолио")}
            </div>
            <div onDoubleClick={showContact}>
                {createFolder(ExplorerImage, "Контакты")}
            </div>
            <div onDoubleClick={showAbout}>
                {createFolder(InfoImage, "Обо мне")}
            </div>
            {/* <Draggable> */}
            <Wrapper
                status={store.activeFolder[0]}
                window={myCompStatus}
                onClick={() => activeWindow(0)}
            >
                <MyComp
                    show={myCompStatus}
                    setShow={showMyComp}
                    collaps={collapsMyComp}
                    myCompCollaps={myCompCollaps}
                    image={MyComputerImage}
                />
            </Wrapper>
            {/* </Draggable>
            <Draggable> */}
            <Wrapper
                status={store.activeFolder[1]}
                window={cvStatus}
                onClick={() => activeWindow(1)}
            >
                <CV
                    show={cvStatus}
                    setShow={showCV}
                    collaps={collapsCV}
                    cvCollaps={cvCollaps}
                    image={ResumeImage}
                />
            </Wrapper>
            {/* </Draggable>
            <Draggable> */}
            <Wrapper
                status={store.activeFolder[2]}
                window={contactStatus}
                onClick={() => activeWindow(2)}
            >
                <Contact
                    show={contactStatus}
                    setShow={showContact}
                    collaps={collapsContact}
                    contactCollaps={contactCollaps}
                    image={ExplorerImage}
                />
            </Wrapper>
            {/* </Draggable>
            <Draggable> */}
            <Wrapper
                status={store.activeFolder[3]}
                window={portfolioStatus}
                onClick={() => activeWindow(3)}
            >
                <Portfolio
                    show={portfolioStatus}
                    setShow={showPortfolio}
                    onClick={activeWindow}
                    collaps={collapsPortfolio}
                    contactCollaps={portfolioCollaps}
                    image={ExplorerImage}
                />
            </Wrapper>
            {/* </Draggable>
            <Draggable> */}
            <Wrapper
                status={store.activeFolder[4]}
                window={aboutStatus}
                onClick={() => activeWindow(4)}
            >
                <About
                    show={aboutStatus}
                    setShow={showAbout}
                    onClick={activeWindow}
                    collaps={collapsAbout}
                    contactCollaps={aboutCollaps}
                    image={ExplorerImage}
                />
            </Wrapper>
            {/* </Draggable> */}
        </div>
    );
}

export default Desktop;
