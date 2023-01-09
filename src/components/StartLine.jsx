import { useState } from "react";
import NetworkImg from "../assets/media/images/Network.ico";
import VolumeImg from "../assets/media/images/Volume.ico";
import StartButton from "./StartButton";
import StartClock from "./StartClock";
import StartWindow from "./StartWindow";

export default function StartLine() {
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
    };

    return (
        <div className="footer-line">
            <StartWindow show={isShowFolder} />
            <div className="footer">
                <div>
                    <StartButton
                        showFolder={showFolder}
                        isShowFolder={isShowFolder}
                    />
                </div>
                <StartClock />
            </div>
        </div>
    );
}
