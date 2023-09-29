import { MessageOptions, UIState } from './';

type UIType =
    | { type: '[UI] - ToggleMenu' }
    | { type: '[UI] - ToggleUploading' }
    | { type: '[UI] - SetMessage', payload: MessageOptions }

export const uiReducer = (state: UIState, action: UIType): UIState => {
    switch (action.type) {
        case '[UI] - ToggleMenu':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        case '[UI] - ToggleUploading':
            return {
                ...state,
                isUploading: !state.isUploading,
            }
        case '[UI] - SetMessage':
            return {
                ...state,
                messageOptions: action.payload,
            }
        default:
            return state;
    }
}