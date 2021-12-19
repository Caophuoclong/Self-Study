import { createContext } from "react";
import type {State, Action} from "./reducer";
interface ContextProps{
    state: State;
    dispatch: (action: Action) => void;
}
const Context = createContext({}as ContextProps);

export default Context;