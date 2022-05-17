import React from "react";
import { ContextType } from "../types";


const useCTX = (context: React.Context<ContextType>) => {
    const { state, dispatch } = React.useContext(context);
    return { state, dispatch }
}
export default useCTX;