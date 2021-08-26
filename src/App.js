import { useState } from 'react';
import Player from './components/Player';
// Import Styles
import './styles/app.scss';
// Import Components
import Song from './components/Song';
// Impport Util
import data from './data';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPLaying, setIsPLaying] = useState(false);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        isPLaying={isPLaying}
        setIsPLaying={setIsPLaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
