import BoardItem from "./boardItem";
import Ladder from "./items/ladder";

const Board = (props) => {

    const drawLadderBetweenBoardItems = ladders => {

        const laddersElements = [];

        for (const ladder in ladders) {

            // Bottom Node of the Ladder
            let ladderLowerNode = ladder;

            // Upper Node of the Ladder
            let ladderTopNode = ladders[ladder];

            // The column and row of the bottom node
            let ladderLowerNodeRow = Math.ceil(ladderLowerNode/10);
            let ladderLowerNodeCol = ladderLowerNode - ((ladderLowerNodeRow - 1) * 10); // (10*ladderBottomNodeRow) - ladderBottomNode;
            if(ladderLowerNodeRow % 2 === 0) ladderLowerNodeCol = 11 - ladderLowerNodeCol;

            // the column and row of the top node
            let ladderUpperNodeRow = Math.ceil(ladderTopNode/10);
            let ladderUpperNodeCol = ladderTopNode - ((ladderUpperNodeRow - 1) * 10); // (10*ladderTopNodeRow) - ladderTopNode;
            if(ladderUpperNodeRow % 2 === 0) ladderUpperNodeCol = 11 - ladderUpperNodeCol;

            // Bottom Node
            let lowerNodeBottom = (ladderLowerNodeRow - 0.5) * 60;// 150;
            let lowerNodeLeft = (ladderLowerNodeCol - 0.5) * 60;// 330;

            // UpperNode
            let upperNodeBottom = (ladderUpperNodeRow - 0.5) * 60; // 330;
            let upperNodeLeft = (ladderUpperNodeCol - 0.5) * 60; // 150;

            let angle = Math.atan2(upperNodeLeft - lowerNodeLeft, upperNodeBottom - lowerNodeBottom) * 180 / Math.PI;
            let coordinateX = upperNodeBottom - lowerNodeBottom;
            let coordinateY = upperNodeLeft - lowerNodeLeft;
            let distance = Math.sqrt( coordinateX*coordinateX + coordinateY*coordinateY );
            console.log(distance);

            laddersElements.push(<Ladder key={'ladder'+ladder} ladderHeight={distance} ladderAngle={angle} ladderTop={lowerNodeBottom} ladderLeft={lowerNodeLeft} />)
        }
        return laddersElements;
    }

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
                BoardRows.push(<BoardItem key={(i*10)-j} number={(i*10)-j} placementOrder={order} column={9 - j+1} row={i} />);
            }
        }
        return BoardRows;
    }

    return (
        <div className='playBoard'>
            {drawBoard().map(value => {
                return value;
            })}
            {drawLadderBetweenBoardItems(props.ladders).map(value => {
                return value;
            })}
        </div>
    );
}

export default Board;