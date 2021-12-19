import { StoreContext } from ".";
import { useReducer } from "react";
import reducer, {initState} from  "./reducer";
import type {ReactChild, ReactChildren} from "react";
interface AuxProps {
    children: ReactChild | ReactChildren
}
function Provider({children}: AuxProps) {
    const [state, dispatch ] = useReducer(reducer, initState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>

    )

}
export default Provider;