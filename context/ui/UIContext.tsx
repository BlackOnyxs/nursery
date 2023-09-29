import { createContext } from 'react';

export type MessageOptions = {
    message: string;
    type: 'success' | 'error' | 'info';
}

interface ContextProps {
    isMenuOpen: boolean;
    isUploading: boolean;
    messageOptions: MessageOptions;

    toggleSideMenu: () => void;
    toggleUploading: () => void;
    setMessage: ( messageOptions: MessageOptions ) => void;
}


export const UIContext = createContext({} as ContextProps);