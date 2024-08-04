import './App.css';
import AlbumSection from './components/AlbumSection/AlbumSection';
import AppRoute from './routes/Route';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <AppRoute/>
    </div>
  );
}

export default App;
