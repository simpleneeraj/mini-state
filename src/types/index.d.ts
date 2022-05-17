import React from "react"

type Reducer<State, Action> = (p: State, a: Action) => State
type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)

interface ActionTypes {
    type: string,
    payload: any,
    [key: string]: any
}
interface CreateContext<State, Action> {
    type?: 'useState' | 'useReducer'
    reducer?: Reducer<State, Action>;
    initialState: State;
}
interface ContextType {
    state: any;
    dispatch: any;
}

