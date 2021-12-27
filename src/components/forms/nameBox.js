import {useSelector} from "react-redux";

const NameBox = (props) => {
    const playersList = useSelector(state => state.player);
    return (
        <div>
            <input type="text" value={props.name} name="playerName" onChange={props.changeName}/>
            {playersList.length >= 3 ? <button onClick={props.removePlayer}>Remove</button> : ""}
        </div>
    );
}

export default NameBox;