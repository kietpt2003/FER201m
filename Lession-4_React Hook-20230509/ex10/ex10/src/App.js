import './App.css';
import Player from './components/Player';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
