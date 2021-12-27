import Dice from "./dice";
import Board from "./board";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {playerActions} from "../../store/player";

const GameBoard = () => {

    const LADDERS = {
        4: 14,
        9: 31,
        20: 38,
        28: 84,
        40: 59,
        63: 81,
        71: 91
    };

    const SNAKES = {
        17: 7,
        54: 34,
        62: 18,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        99: 78
    };

    const playersList = useSelector(state => state.player);
    const dispatch = useDispatch();
    const [currentTurn, setCurrentTurn] = useState(playersList[0].id);

    const onRollDiceHandler = (playerId, position) => {
        playersList.map((player, index) => {
            if (player.id === playerId) {
                if (index+1 >= playersList.length) {
                    setCurrentTurn(playersList[0].id);
                } else {
                    setCurrentTurn(playersList[index+1].id);
                }
                dispatch(playerActions.setPlayerPosition({
                    id: player.id,
                    position: position
                }));
                if (LADDERS[position]) {
                    position = LADDERS[position];
                }
                if (SNAKES[position]) {
                    position = SNAKES[position];
                }
                setTimeout(() => {
                    dispatch(playerActions.setPlayerPosition({
                        id: player.id,
                        position: position
                    }));
                }, 1000)
            }
        });
    }

    const getCurrentPlayerTurnPosition = () => {
        const currentPlayerTurnPosition = playersList.find(player => player.id === currentTurn);
        return currentPlayerTurnPosition.position;
    }

    return (
        <div>
            <Dice playerTurn={currentTurn} onRollDice={onRollDiceHandler} playerPosition={getCurrentPlayerTurnPosition()} />
            <Board />
        </div>
    );
}

export default GameBoard;