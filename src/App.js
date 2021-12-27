import './App.css';
import Board from "./components/board/board";
import {Provider} from "react-redux";
import store from "./store/player";
import Dice from "./components/board/dice";
import GameForm from "./components/forms/gameForm";
import {Route, Routes} from "react-router-dom";
import GameBoard from "./components/board/gameBoard";

function App() {
    return (

        <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route path="/game" element={<GameBoard/>} />
                    <Route path="/" element={<GameForm />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
