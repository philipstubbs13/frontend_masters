import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { AdjustColorActions, colorReducer, initialState } from "./color-reducer";

type ColorContextState = {
    hexColor: string;
    dispatch: Dispatch<AdjustColorActions>;
}

export const ColorContext = createContext<ColorContextState>({
    hexColor: '#FFADEF'
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [state , dispatch] = useReducer(colorReducer, initialState);
    const hexColor = state.hexColor;

    return (
        <ColorContext.Provider value={{ hexColor, dispatch }}>
            {children}
        </ColorContext.Provider>
    )
};