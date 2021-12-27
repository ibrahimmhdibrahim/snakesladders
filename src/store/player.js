import {configureStore, createSlice} from "@reduxjs/toolkit";

// Board Slice
let boardInitialState = {players: [], winner: 0, turn: 0}
const boardSLice = createSlice({
    name: "board",
    initialState: boardInitialState,
    reducers: {
        setWinner(state, action) {
            state.winner = action.payload.winner;
        }
    }
});

// Player Slice
let PlayerInitialState = [
    {id: 1, name: "fuzzy goose", position: 0},
    {id: 2, name: "loose nose", position: 0}
];
const playerSlice = createSlice({
    name: "player",
    initialState: PlayerInitialState,
    reducers: {
        setPlayerName(state, action) {
            state.map(player => console.log(player.id));
            const checkPlayer = state.find(player => player.id === action.payload.id);
            checkPlayer.name = action.payload.name;
        },
        setNewPlayer(state, action) {
            state.push(action.payload);
        },
        removePlayer(state, action) {
            return state.filter(player => player.id !== action.payload.id);
        },
        setPlayerPosition(state, action) {
            const checkPlayer = state.find(player => player.id === action.payload.id);
            checkPlayer.position = action.payload.position;
        }
    }
});

const store = configureStore({
    reducer: {
        player: playerSlice.reducer,
        board: boardSLice.reducer
    }
});

export const playerActions = playerSlice.actions;
export const boardActions = boardSLice.actions;

export default store;