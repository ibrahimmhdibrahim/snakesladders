import {useState} from "react";

const Dice = (props) => {
    const [diceRoll, setDiceRoll] = useState(1);

    const rollDiceHandler = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(roll);
        // Add move player to correct position
        const playerNewPosition = props.playerPosition + roll;

        props.onRollDice(props.playerTurn, playerNewPosition);
    }

    return (
        <div onClick={rollDiceHandler}>
            {diceRoll}
        </div>
    );
}

export default Dice;