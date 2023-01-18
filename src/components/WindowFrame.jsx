import Collaps from "../assets/media/images/collaps.jpg";
import Maximize from "../assets/media/images/maximize.jpg";
import Close from "../assets/media/images/close.jpg";
import MyComputer from "../assets/media/images/MyComputer.ico";
import CV from "../assets/media/images/resume.ico";
import styled from "styled-components";
import { useState } from "react";

const Title = styled.h2`
    margin: 2px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;

    &::before {
        margin-bottom: -2px;
        margin-right: 3px;
        padding: 0;

        background-position: center center;
        background-size: 16px 13px;
        display: inline-block;
        width: 16px;
        height: 13px;
        content: "";
    }
`;

export default function WindowFrame({
    children,
    name,
    setShow,
    img,
    show,
    collaps,
}) {
    function createMenu(first, other) {
        return (
            <li className="window__header-function-text function__btn">
                <span className="underline">{first}</span>
                {other}
            </li>
        );
    }

    const [isMinimize, setIsMinimize] = useState(false);
    const toMinimize = () => {
        setIsMinimize((prev) => !prev);
    };

    return (
        <div
            className={show ? " window " : "myComp-window window"}
            style={
                isMinimize
                    ? {
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          width: "100vw",
                          height: "98vh",
                      }
                    : {
                          width: "350px",
                          position: "absolute",
                          top: `${show * 30}px`,
                          left: `${show * 100}px`,
                      }
            }
        >
            <div className="window__header">
                {/* <img src={CV} /> */}
                <div className="move">
                    <Title className="window__header-title">{name}</Title>
                </div>
                <div className="window__buttons">
                    <img
                        className="window__btn"
                        src={Collaps}
                        onClick={collaps}
                    />
                    <img
                        className="window__btn"
                        src={Maximize}
                        onClick={toMinimize}
                    />
                    <img
                        className="window__btn"
                        src={Close}
                        onClick={setShow}
                    />
                </div>
            </div>

            <div>
                <ul className="window__header-function">
                    {createMenu("Ф", "айл")}
                    {createMenu("П", "равка")}
                    {createMenu("В", "ид")}
                    {createMenu("П", "омощь")}
                </ul>
            </div>
            {children}

            {/* <div className="window__footer">
                <div className="area">5 объектов</div>
                <div className="area"></div>
            </div> */}
        </div>
    );
}
