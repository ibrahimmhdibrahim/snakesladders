import BoardItem from "./boardItem";
import PlayerToken from "../player/playerToken";

const Board = () => {

    const drawBoard = () => {
        let BoardRows = [];
        // Iterate through rows
        for (let i = 10; i > 0; i--) {
            let isChangeOrder = i%2 !== 0;
            let order = null;
            // Iterate through columns
            for (let j = 0; j < 10; j++) {
                // 100 - number because the board starts at the bottom
                order = 100 - ((i*10) - j);
                if (isChangeOrder) {
                    // Revert the order for odd rows.
                    // total Board items - ((order is Row number x 10) - number of cols left)
                    order = 100 - ((i*10) - (9-j));
                }
                BoardRows.push(<BoardItem key={(i*10)-j} number={(i*10)-j} placementOrder={order} />);
            }
        }
        return BoardRows;
    }

    return (
        <div className='playBoard'>
            {drawBoard().map(value => {
                return value;
            })}
        </div>
    );
}

export default Board;