import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import RecycleImage from "../assets/media/images/Recycle.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import OpenedWindow from "./OpenedWindow";
import { useState } from "react";
import Message from "./Message";

export default function Desktop() {
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
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
            {createFolder(FolderImage, "Резюме")}
            {createFolder(ExplorerImage, "Контакты")}
            {createFolder(RecycleImage, "Recycle Bin")}

            <Message />
            <OpenedWindow show={isShowFolder} setShow={showFolder} />
        </div>
    );
}
