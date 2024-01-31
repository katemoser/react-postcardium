import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

/** Top-level App component for Postcard application
 *
 * props: None
 *
 * state: None
 *
 * renders: App -> NavBar
 *              -> RoutesList
 * */
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
