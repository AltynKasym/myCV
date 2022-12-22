import React from "react";

export default function StartWindow({ show }) {
    return (
        <div
            className={
                show ? "window window__start" : "window window__start-hidden"
            }
        >
            <div className="window95">
                <p>
                    Windows<span>95</span>{" "}
                </p>
            </div>
            <div className="programms">
                <ul>
                    <li className="window__start-items">Программы</li>
                    <li className="window__start-items">Документы</li>
                    <li className="window__start-items">Настройка</li>
                    <li className="window__start-items">Найти</li>
                    <li className="window__start-items">Справка</li>
                    <li className="window__start-items">Выполнить</li>
                    <li className="window__start-items">Завершение работы</li>
                </ul>
            </div>
        </div>
    );
}
