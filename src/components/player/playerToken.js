import {Transition} from "react-transition-group";

const PlayerToken = (props) => {
    const transitions = {
        entering: {
            display: 'block'
        },
        entered: {
            opacity: 1,
            display: 'block'
        },
        exiting: {
            opacity: 0,
            display: 'block'
        },
        exited: {
            opacity: '0',
            display: 'none'
        }
    };
    return (
        <Transition in={props.transition} timeout={500}>
            {state => (
                <div className="playerToken"
                     style={{
                         gridRow: 1,
                         gridColumn: 1,
                         transition: 'all .5s ease',
                         opacity: 0,
                         display: 'none',
                         ...transitions[state]
                     }}>
                    {props.name}
                </div>
            )}
        </Transition>
    );
}

export default PlayerToken;