export default function StartButton({ isShowFolder }) {
    return (
        <div
            className={
                isShowFolder
                    ? "footer__start press-btn-push"
                    : "footer__start press-btn-start"
            }
        >
            Пуск
        </div>
    );
}
