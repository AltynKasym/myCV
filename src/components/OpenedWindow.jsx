import Diskette from "../assets/media/images/Diskette.ico";
import Drive from "../assets/media/images/Drive.ico";
import DiscDrive from "../assets/media/images/DiscDrive.ico";
import ControlPanel from "../assets/media/images/ControlPanel.ico";
import Printer from "../assets/media/images/Printers.ico";
export default function OpenedWindow({ show, setShow }) {
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
    function createMenu(first, other) {
        return (
            <li className="window__header-function-text function__btn">
                <span className="underline">{first}</span>
                {other}
            </li>
        );
    }
    return (
        <div
            className={
                show
                    ? "myComp-window window myComp-window-vis"
                    : "myComp-window window"
            }
        >
            <div className="window__header">
                <div className="move">
                    <h2 className="window__header-title">Мой компьютер</h2>
                </div>
                <div className="window__buttons">
                    <div className="window__btn press-btn">–</div>
                    <div className="window__btn press-btn">+</div>
                    <div className="window__btn press-btn" onClick={setShow}>
                        X
                    </div>
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
            <div className="window__main">
                <div onClick={() => alert(55)}>
                    {createFolder(Diskette, "Диск 3.5(A)")}
                </div>

                <div onClick={() => alert(66)}>
                    {createFolder(Drive, "Win95 (C:)")}
                </div>
                {createFolder(DiscDrive, "New (D:)")}
                {createFolder(ControlPanel, "Панель управления")}
                {createFolder(Printer, "Принтеры")}
            </div>
            <div className="window__footer">
                <div className="area">5 объектов</div>
                <div className="area"></div>
            </div>
        </div>
    );
}
