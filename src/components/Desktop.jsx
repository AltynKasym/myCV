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

export default function Desktop() {
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
    };

    const [isShowCV, setIsShowCV] = useState(false);
    const showCV = () => {
        setIsShowCV((prev) => !prev);
    };

    const [isShowContact, setIsShowContact] = useState(false);
    const showContact = () => {
        setIsShowContact((prev) => !prev);
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

            <OpenedWindow
                show={isShowFolder}
                setShow={showFolder}
                onMouseDown={add}
                onMouseUp={remove}
            />

            <CV show={isShowCV} setShow={showCV} />
            <Contact show={isShowContact} setShow={showContact} />

            {/* <Wrapper onMouseDown={add} onMouseUp={remove} /> */}
        </div>
    );
}
