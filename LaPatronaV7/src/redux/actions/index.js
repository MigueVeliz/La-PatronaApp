import { HIDE_MINI_PLAYER } from './actions-types';
import { SHOW_MINI_PLAYER } from './actions-types';

export function hideMiniPlayer(payload) {
    return { type: HIDE_MINI_PLAYER, payload }
}

export function showMiniPlayer(payload) {
    return { type: SHOW_MINI_PLAYER, payload }
}