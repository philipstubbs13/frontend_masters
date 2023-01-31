import { Dispatch, PropsWithChildren, useReducer } from "react";
import { AdjustColorActions, colorReducer, initialState } from "./color-reducer";
import { createContext } from "./create-context";

type ColorContextState = {
    hexColor: string;
    dispatch: Dispatch<AdjustColorActions>;
}

export const [useColorContext, ContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;

const useHexColor = () => {
    const { hexColor } = useColorContext();
    return hexColor;
}

const useDispatch = () => {
    const { dispatch } = useColorContext();
    return dispatch;
}

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const hexColor = state.hexColor;

    return (
        <ContextProvider value={{ hexColor, dispatch }}>
            {children}
        </ContextProvider>
    )
};