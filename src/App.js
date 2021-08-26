import { useState } from 'react';
// Import Styles
import './styles/app.scss';
// Import Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// Import Util
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
      <Library songs={songs} />
    </div>
  );
}

export default App;
