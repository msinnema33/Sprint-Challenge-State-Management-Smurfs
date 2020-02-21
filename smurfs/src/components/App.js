import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
import { createStore, applyMiddleware } from 'redux';
import { smurfReducer as reducer } from '../reducers/smurfReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux by Mike Sinnema</h1>
        <div>Welcome to the state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <AddSmurf />
        <SmurfList />
      </div>
    </Provider>
  );
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;
