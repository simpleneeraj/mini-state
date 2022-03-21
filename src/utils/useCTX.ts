import React from "react";

interface ContextType {
    state: any;
    dispatch: any;
}

const useCTX = (Context: React.Context<ContextType>) => {
    const { state, dispatch } = React.useContext(Context);
    return { state, dispatch }
}
export default useCTX;