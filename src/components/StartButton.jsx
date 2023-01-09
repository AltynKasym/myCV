import { useState } from "react";

export default function StartButton({ showFolder, isShowFolder }) {
    return (
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
    );
}
