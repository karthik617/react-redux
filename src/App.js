import './App.css';
import Post from './component';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Post />
    </div>
    </Provider>
  );
}

export default App;
