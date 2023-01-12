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
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        console.log("isShowFolder", isShowFolder);
        isShowFolder
            ? dispatch(closeFolder("MyComputer"))
            : dispatch(openFolder("MyComputer"));
        setIsShowFolder((prev) => !prev);
    };

    const [isShowCV, setIsShowCV] = useState(false);
    const showCV = () => {
        isShowCV ? dispatch(closeFolder("cv")) : dispatch(openFolder("cv"));
        setIsShowCV((prev) => !prev);
    };

    const [isShowContact, setIsShowContact] = useState(false);
    const showContact = () => {
        isShowContact
            ? dispatch(closeFolder("contacts"))
            : dispatch(openFolder("contacts"));
        setIsShowContact((prev) => !prev);
    };

    const folder = useSelector((folder) => folder);
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

    let offsetX, offsetY;
    const move = (e) => {
        const el = e.target;
        el.style.position = "absolute";
        el.style.left = `${e.pageX - offsetX}px`;
        el.style.top = `${e.pageY - offsetY}px`;
    };
    const add = (e) => {
        const el = e.target;
        offsetX = e.clientX - el.getBoundingClientRect().left;
        offsetY = e.clientY - el.getBoundingClientRect().top;
        el.addEventListener("mousemove", move);
        console.log("add", el);
    };
    const remove = (e) => {
        const el = e.target;
        el.removeEventListener("mousemove", move);
        console.log("remove", el);
    };
    const Wrapper = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 29px;
        box-shadow: 0 0 6px;
        position: absolute;
        top: 40px;
        left: 227px;
        background-color: rgb(0, 0, 0, 0.5);
        cursor: pointer;
    `;

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
                    zIndex: `${folder[0].status + 10}`,
                    position: "absolute",
                    top: `${folder[0].status * 30}px`,
                    left: `${folder[0].status * 100}px`,
                }}
            >
                <OpenedWindow show={isShowFolder} setShow={showFolder} />
            </div>
            <div
                style={{
                    zIndex: `${folder[1].status + 10}`,
                    position: "absolute",
                    top: `${folder[1].status * 30}px`,
                    left: `${folder[1].status * 100}px`,
                }}
            >
                <CV show={isShowCV} setShow={showCV} />
            </div>
            <div
                style={{
                    zIndex: `${folder[2].status + 10}`,
                    position: "absolute",
                    top: `${folder[2].status * 30}px`,
                    left: `${folder[2].status * 100}px`,
                }}
            >
                <Contact show={isShowContact} setShow={showContact} />
            </div>
            {/* <Wrapper onMouseDown={add} onMouseUp={remove} /> */}
        </div>
    );
}
