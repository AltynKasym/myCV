import Collaps from "../assets/media/images/collaps.jpg";
import Maximize from "../assets/media/images/maximize.jpg";
import Close from "../assets/media/images/close.jpg";
import MyComputer from "../assets/media/images/MyComputer.ico";
import CV from "../assets/media/images/resume.ico";
import styled from "styled-components";

export default function WindowFrame({ children, name, setShow, img }) {
    function createMenu(first, other) {
        return (
            <li className="window__header-function-text function__btn">
                <span className="underline">{first}</span>
                {other}
            </li>
        );
    }

    const Title = styled.h2`
        margin: 2px;
        font-size: 12px;
        font-weight: 400;
        color: #fff;

        &::before {
            margin-bottom: -2px;
            margin-right: 3px;
            padding: 0;
            background-image: url(${img});
            background-position: center center;
            background-size: 16px 13px;
            display: inline-block;
            width: 16px;
            height: 13px;
            content: "";
        }
    `;

    return (
        <div>
            <div className="window__header">
                {/* <img src={CV} /> */}
                <div className="move">
                    <Title className="window__header-title">{name}</Title>
                </div>
                <div className="window__buttons">
                    <img className="window__btn" src={Collaps} />
                    <img className="window__btn" src={Maximize} />
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

            <div className="window__footer">
                <div className="area">5 объектов</div>
                <div className="area"></div>
            </div>
        </div>
    );
}
