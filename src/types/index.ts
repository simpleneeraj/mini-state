export type Reducer<State, Action> = (p: State, a: Action) => State
export type Dispatch<A> = (value: A) => void
export type SetStateAction<S> = S | ((prevState: S) => S)
export interface ActionTypes {
    type: string,
    payload: any,
    [key: string]: any
}
export interface CreateContext<State, Action> {
    type?: 'useState' | 'useReducer'
    reducer?: Reducer<State, Action>;
    initialState: State;
}

