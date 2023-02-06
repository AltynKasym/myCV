import "./App.css";
import "./style.css";
import StartLine from "./components/StartLine";
import Desktop from "./components/Desktop";
import { Provider } from "react-redux";
import store from "./store/Reducer";
import { useState } from "react";

function App() {
    const [isShowFolder, setIsShowFolder] = useState(false);

    function showFolder(e) {
        e.target.classList.contains("footer__start")
            ? setIsShowFolder((prev) => !prev)
            : setIsShowFolder(false);
    }

    return (
        <div className="App" onClick={showFolder}>
            <Provider store={store}>
                <Desktop />
                <StartLine isShowFolder={isShowFolder} />
            </Provider>
        </div>
    );
}

export default App;
