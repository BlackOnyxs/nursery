import { FC, PropsWithChildren, useReducer } from 'react';
import { MessageOptions, UIContext, uiReducer } from './';

export interface UIState {
    isMenuOpen: boolean;
    isUploading: boolean;
    messageOptions: MessageOptions;
}

const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
    isUploading: false,
    messageOptions: { type: 'info', message: '' },
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch ]= useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' });
    }

    const toggleUploading = () => {
        dispatch({ type: '[UI] - ToggleUploading' });
    }

    const setMessage = ( messageOptions: MessageOptions  ) => {
        dispatch({ type: '[UI] - SetMessage', payload: messageOptions })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            toggleSideMenu,
            toggleUploading,
            setMessage,
        }}>
            { children }
        </UIContext.Provider>
    );
}