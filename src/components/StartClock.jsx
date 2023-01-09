import { useState } from "react";
import NetworkImg from "../assets/media/images/Network.ico";
import VolumeImg from "../assets/media/images/Volume.ico";
export default function StartClock() {
    const [time, setTime] = useState({});

    setInterval(() => {
        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes();
        setTime({ h: h, m: m });
    }, 1000);

    return (
        <div className="footer__clock">
            <img className="footer__network" src={NetworkImg} />
            <img className="footer__volume" src={VolumeImg} />
            <span id="clock">
                {time.h < 10 ? "0" + time.h : time.h}:
                {time.m < 10 ? "0" + time.m : time.m}
            </span>
        </div>
    );
}
