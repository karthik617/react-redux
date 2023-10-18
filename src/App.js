import './App.css';
import User from './component';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <User />
    </div>
    </Provider>
  );
}

export default App;
