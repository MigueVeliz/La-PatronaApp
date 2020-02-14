import { SHOW_MINI_PLAYER, HIDE_MINI_PLAYER } from '../actions/actions-types';

const initialState = {
    showPlay: true,
    hideMiniPlayer: false,
    showMiniPlayer: true,
    word: "hiii"

}

export default ( state = initialState, action ) => {
    if(action.type === HIDE_MINI_PLAYER) {
        return {...state, showMiniPlayer: action.payload}
    } else if (action.type === SHOW_MINI_PLAYER) {
        return {...state, showMiniPlayer: action.payload}
    }
    return state;
}