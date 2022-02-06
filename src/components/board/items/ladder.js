const Ladder = (props) => {

    return (
        <div className="ladder" style={{
            backgroundImage: 'url(/ladder.png)',
            height: props.ladderHeight + 'px',
            bottom: props.ladderTop,
            left: props.ladderLeft,
            transform: "rotate(" + props.ladderAngle + "deg)",
        }}></div>
    );
}

export default Ladder;