import Collaps from "../assets/media/images/collaps.jpg";
import Maximize from "../assets/media/images/maximize.jpg";
import Close from "../assets/media/images/close.jpg";
import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import ResumeImage from "../assets/media/images/resume.ico";
import RecycleImage from "../assets/media/images/Recycle.ico";
import InfoImage from "../assets/media/images/info.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import CV from "../assets/media/images/resume.ico";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
    position: absolute;
    top: ${(props) => (props.minimize ? "0px" : `${props.show * 30}px`)};
    left: ${(props) => (props.minimize ? "0px" : `${props.show * 100}px`)};
    /* left: 150px; */
    width: ${(props) => (props.minimize ? "100vw" : "350px")};
    height: ${(props) => props.minimize && "98vh"};
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Title = styled.h2`
    margin: 2px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
`;
const Image = styled.img`
    padding: 0 5px;
    height: 15px;
`;

export default function WindowFrame({
    children,
    name,
    setShow,
    img,
    show,
    collaps,
    image,
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

    useEffect(() => {
        !show && setIsMinimize(false);
    }, [show]);
    return (
        <Wrapper
            className={show ? " window " : "myComp-window window"}
            minimize={isMinimize}
            show={show}
        >
            <div className="window__header">
                <TitleWrapper>
                    <Image src={`${image}`} />
                    <Title className="window__header-title">{name}</Title>
                </TitleWrapper>
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
        </Wrapper>
    );
}
