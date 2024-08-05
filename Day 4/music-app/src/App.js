import './App.css';
import AlbumSection from './components/AlbumSection/AlbumSection';
import AppRoute from './routes/Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "./store/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute/>
      </Provider>
        
    </div>
  );
}

export default App;
