import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';

function App() {

  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
