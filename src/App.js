import "./App.css";
import "./style.css";
import StartLine from "./components/StartLine";
import Desktop from "./components/Desktop";
import { Provider } from "react-redux";
import store from "./store/Reducer";
import { useState } from "react";

function App() {
    // // Активация окна
    // const winQueue = [false, false, false, false, false];
    // const [active, setActive] = useState(winQueue);

    // const activeWindow = function (id) {
    //     console.log("id", id);
    //     winQueue.forEach((item, ind) => {
    //         id === ind ? (winQueue[ind] = true) : (winQueue[ind] = false);
    //     });

    //     setActive(winQueue);
    //     console.log("active", active);
    // };
    return (
        <div className="App">
            <Provider store={store}>
                <Desktop />
                <StartLine />
            </Provider>
        </div>
    );
}

export default App;
