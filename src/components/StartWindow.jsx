import React from "react";

export default function StartWindow({ show }) {
    return (
        <div
            class={
                show ? "window window__start" : "window window__start-hidden"
            }
        >
            <div class="window95">
                <p>
                    Windows<span>95</span>{" "}
                </p>
            </div>
            <div class="programms">
                <ul>
                    <li class="window__start-items">Программы</li>
                    <li class="window__start-items">Документы</li>
                    <li class="window__start-items">Настройка</li>
                    <li class="window__start-items">Найти</li>
                    <li class="window__start-items">Справка</li>
                    <li class="window__start-items">Выполнить</li>
                    <li class="window__start-items">Завершение работы</li>
                </ul>
            </div>
        </div>
    );
}
