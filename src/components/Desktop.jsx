import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import ResumeImage from "../assets/media/images/resume.ico";
import RecycleImage from "../assets/media/images/Recycle.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import OpenedWindow from "./OpenedWindow";
import { useRef, useState } from "react";
import Message from "./Message";
import CV from "./CV";
import styled from "styled-components";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import { closeFolder, openFolder } from "../store/FolderSlice";

export default function Desktop() {
    const dispatch = useDispatch();
    const folder = useSelector((folder) => folder);
    const [myCompStatus, cvStatus, contactStatus] = [
        folder[0].status,
        folder[1].status,
        folder[2].status,
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
                style={{
                    position: "absolute",
                    top: `${myCompStatus * 30}px`,
                    left: `${myCompStatus * 100}px`,
                    zIndex: `${myCompStatus + 10}`,
                }}
            >
                <OpenedWindow show={myCompStatus} setShow={showFolder} />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: `${cvStatus * 30}px`,
                    left: `${cvStatus * 100}px`,
                    zIndex: `${cvStatus + 10}`,
                }}
            >
                <CV show={cvStatus} setShow={showCV} />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: `${contactStatus * 30}px`,
                    left: `${contactStatus * 100}px`,
                    zIndex: `${contactStatus + 10}`,
                }}
            >
                <Contact show={contactStatus} setShow={showContact} />
            </div>
            {/* <Wrapper onMouseDown={add} onMouseUp={remove} /> */}
        </div>
    );
}
