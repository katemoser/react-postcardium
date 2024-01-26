import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
