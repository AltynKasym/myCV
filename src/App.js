import "./App.css";
import "./style.css";
import StartLine from "./components/StartLine";
import Desktop from "./components/Desktop";
import { Provider } from "react-redux";
import store from "./store/Reducer";

function App() {
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
