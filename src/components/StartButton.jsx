import { useState } from "react";
import NetworkImg from "../assets/media/images/Network.ico";
import VolumeImg from "../assets/media/images/Volume.ico";
import StartWindow from "./StartWindow";

export default function StartButton() {
    const [time, setTime] = useState({});
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
    };
    setInterval(() => {
        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes();
        setTime({ h: h, m: m });
    }, 1000);

    return (
        <>
            <StartWindow show={isShowFolder} />
            <div className="footer">
                <div
                    className={
                        isShowFolder
                            ? "footer__start press-btn-push"
                            : "footer__start press-btn-start"
                    }
                    onClick={showFolder}
                >
                    Пуск
                </div>
                <div className="footer__clock">
                    <img className="footer__network" src={NetworkImg} />
                    <img className="footer__volume" src={VolumeImg} />
                    <span id="clock">
                        {time.h}:{time.m}
                    </span>
                </div>
            </div>
        </>
    );
}
