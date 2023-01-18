import Diskette from "../assets/media/images/Diskette.ico";
import Drive from "../assets/media/images/Drive.ico";
import DiscDrive from "../assets/media/images/DiscDrive.ico";
import ControlPanel from "../assets/media/images/ControlPanel.ico";
import Printer from "../assets/media/images/Printers.ico";

import Message from "./Message";
import { useState } from "react";
import WindowFrame from "./WindowFrame";
import { useDispatch, useSelector } from "react-redux";

export default function MyComp({ show, setShow, collaps, myCompCollaps }) {
    function createFolder(src, name) {
        return (
            <li className="header-function-text">
                <div className="label">
                    <figure className="figure">
                        <img className="label__img" src={src} alt={name} />
                        <figcaption>{name}</figcaption>
                    </figure>
                </div>
            </li>
        );
    }

    const [isShowWindow, setIsShowWindow] = useState(false);

    function setWindowStatus(status) {
        setIsShowWindow(status);
    }

    const dispatch = useDispatch();
    return (
        <>
            <div
                style={
                    myCompCollaps
                        ? {
                              opacity: "0.3",
                          }
                        : {
                              opacity: "1",
                          }
                }
            >
                <WindowFrame
                    name="Мой компьютер"
                    setShow={setShow}
                    show={show}
                    collaps={collaps}
                >
                    <div className="window__main">
                        <div onDoubleClick={() => setWindowStatus(true)}>
                            {createFolder(Diskette, "Диск 3.5(A)")}
                        </div>

                        <div>{createFolder(Drive, "Win95 (C:)")}</div>
                        <div onDoubleClick={() => setWindowStatus(true)}>
                            {createFolder(DiscDrive, "New (D:)")}
                        </div>
                        {createFolder(ControlPanel, "Панель управления")}
                        {createFolder(Printer, "Принтеры")}
                    </div>
                </WindowFrame>
            </div>
            <div
                style={
                    isShowWindow ? { display: "block" } : { display: "none" }
                }
            >
                <Message
                    closeWindow={setWindowStatus}
                    messageText="Пожалуйста, поставьте диск и нажмите OK"
                />
            </div>
        </>
    );
}
