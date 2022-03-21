## What is context?

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

But you can use `context-api` as a global state management tool, there are lots of complex libraries (`Redux`, `mobx`,`Recoil`,`HookState` and many more...) for managing state in `React.js` application.

## Why i built this library?

Because i liked `React.js` and building some web app for my personal use during my journey i have lots of problems. but i never give up. And this attitude reached me here now i am learning `typescript` but my methods for learing coding is practice and for deep dive in `typescript` i converted my previous web app to `typescript` so now i can able to doing basic things from this.

And for knowing more things in technology era i loved to learn something everyday.

## How to Start

To intigrate `mini-state` in your projects you need to install using `npm` after install follow these examples.

```bin
npm install mini-state
```

### createCTX
This is usally like as `React.createContext` but here you don't need hard code.
You only need 2 steps to creating your context super fast

- step 1

You need to import `createCTX`
```js
import {createCTX} from "mini-state"
```
- step 2

Now creating context via `createCTX` with the type of `useState` Hook
```js
const [Context , Provider] = createCTX({
   type:'useState'
   initialState:0
})
```

Now your context is created you can create context globally in your `.jsx` or `.tsx` files

- example `src/index.js`
```js 
// Import related modules 

import { createCTX, useCTX } from 'mini-state';

// Creating context and provider using createCTX
const [Context , Provider] = createCTX({
   type:'useState'
   initialState:0
})

// Component
const App = () => {
    /*
    * Here we are using state using built in Hook
    * `useCTX` 
    */
  const { state, dispatch } = useCTX(Context)
  console.log('State output in numbers', state);
  return (
    <button onClick={() => dispatch(2000)}>
      <h1>Here State Value {state}</h1>
    </button>
  )
}

// Our Application Root 
const Root: React.FC = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
const div = document.createElement('div');
ReactDOM.render(<Root />, div);
});
```

### createCTX options



- type 
- reducer
- initialState
### useCtx

This Hook provide a way to use `Context` value

```js
const { state, dispatch } = useCTX(Context)
```
### createSlice
When you work with `type="useReducer"` you need to pass more value in `createCtx`

- type
- reducer
- initialState

`createSlice` is a way to creating `initialState`, `reducer` and `actions` for more large state and this function provide better way to create all in one place.

```js
import { createSlice } from "mini-state"
```
and then call this function below in example
```js
const slice = createSlice({
  displayName: "Basic Slice",
  intialState: [],
  reducer: (state, action: ActionTypes) => {
    switch (action.type) {
      case "ADD::TODO":
        return [...state, action.payload]
      case "REMOVE::TODO":
        return state.filter((id) => id !== action.payload)
      default:
        return state
    }
  },
  actions: {
    addTodo: (payload) => ({ type: "ADD::TODO", payload }),
    removeTodo: (payload) => ({ type: "REMOVE::TODO", payload }),
  }
})

export const { intialState, reducer, actions } = slice


```
Here we are creating context with type of `useReducer` Hook

Usage of both same but when you dispatch something best way to use `actions` creators for easy and clean work
```js
const [Context, Provider] = createCTX({
  type: 'useReducer',
  initialState: intialState
  reducer: reducer
})
```

## Usage with React.js
Core Functanality is same for both `React.js` and `Next.js` but you need wrap your web app with `Provider` created by `createCTX`.

#### Folder Structure
Folder Structure in Both `Framework` or `Library` are different like in `React.js` Folder structure like this 



- Your Directory ( root dir )
  - public 
    - `favicon.ico`  
    - `robots.txt`      
    - `index.html`
  - node_modules
  - src
    - `index.js`
    - `app.js`
  - `.env`
  - `.gitignore`
  - `tsconfig.json`
  - `package.json`




## Usage with Next.js
Core Functanality is same for both `React.js` and `Next.js` but you need wrap your web app with `Provider` created by `createCTX`.

#### Folder Structure
Folder Structure in Both `Framework` or `Library` are different like in `Next.js` Folder structure like this 

- Your Directory ( root dir )

  - node_modules
  - public 
    - assets
    - static
    - `favicon.ico`  
    - `robots.txt` 
  - pages 
     - _app.js
     - _document.js
     - _404.js
     - index.js
 - `.env`
 - `.gitignore`
 - `tsconfig.json`
 - `package.json`

