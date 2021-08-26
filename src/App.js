import Player from './components/Player';
// Import Styles
import './styles/app.scss';
// Import Components
import Song from './components/Song';
// Impport Util
import data from './data';

function App() {
  return (
    <div className='App'>
      <Song />
      <Player />
    </div>
  );
}

export default App;
