import {useSelector} from "react-redux";
import PlayerToken from "../player/playerToken";

const BoardItem = (props) => {
    const playersList = useSelector((state) => state.player);

    const playerPositionHandler = () => {
        let players = [];
        for (let i = 1; i <= playersList.length; i++) {
            if (playersList.position === props.number) {
                players.push(<PlayerToken />);
            }
        }
        return players;
    }

    return (
        <div className={`boardItem ${props.placementOrder}`} style={{order: props.placementOrder}}>
            {props.number}
            {playerPositionHandler()}
            {playersList.map((player) => <PlayerToken transition={player.position === props.number} name={player.name} />)}
        </div>

    );
}

export default BoardItem;