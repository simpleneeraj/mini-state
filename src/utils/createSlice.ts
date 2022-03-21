import type { Reducer } from "../types"

interface SliceType<State, Action> {
    displayName?: string
    intialState?: State | undefined,
    reducer?: Reducer<State, Action>
    actions?: any | undefined
}
const createSlice = <State, Action>(type: SliceType<State, Action>) => {
    const displayName = type.displayName
    const reducer = type.reducer
    const actions = type.actions
    const intialState = type.intialState
    return { displayName, reducer, actions, intialState }
}

export default createSlice;

