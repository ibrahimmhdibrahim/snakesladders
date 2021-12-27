import NameBox from "./nameBox";
import {useDispatch, useSelector} from "react-redux";
import {playerActions} from "../../store/player";
import {NavLink} from "react-router-dom";

const GameForm = () => {
    const playersList = useSelector(state => state.player);
    const dispatch = useDispatch();

    const addNewPlayerHandler = (e) => {
        e.preventDefault();
        const newPlayerId = playersList[playersList.length -1].id + 1;
        dispatch(playerActions.setNewPlayer({
            id: newPlayerId,
            name: "",
            position: 0
        }));
    }

    const removePlayerHandler = (e, id) => {
        e.preventDefault();
        dispatch(playerActions.removePlayer({
            id: id
        }));
    }

    const changeNameHandler = (e, id) => {
        dispatch(playerActions.setPlayerName({
            id: id,
            name: e.target.value
        }));
    }

    return (
        <form>
            {playersList.map((value) => <NameBox key={value.id} name={value.name} changeName={(e) => changeNameHandler(e, value.id)} removePlayer={(e) => removePlayerHandler(e, value.id)} />)}
            {playersList.length < 6 ? <button onClick={addNewPlayerHandler}>Add Player</button> : ""}
            <NavLink to="/game">Start Game</NavLink>
        </form>
    );
}

export default GameForm;