import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createCTX, useCTX } from '../dist';



const [Context, Provider] = createCTX({ initialState: 1000 })

describe('it', () => {
  it('Your library mini-state works perfectly', () => {
    const div = document.createElement('div');
    const App = () => {
      const { state, dispatch } = useCTX(Context)
      console.log('State output in numbers',state);
      return (
        <div onClick={()=>dispatch}>
          <h1>Here State Value {state}</h1>
        </div>
      )
    }
    const Root: React.FC = () => {
      return (
        <Provider>
          <App />
        </Provider>
      )
    }
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
