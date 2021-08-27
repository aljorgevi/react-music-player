import { useState, useRef } from 'react';
// Import Styles
import './styles/app.scss';
// Import Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// Import Util
import data from './data';

function App() {
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPLaying, setIsPLaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        isPLaying={isPLaying}
        setIsPLaying={setIsPLaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPLaying={isPLaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
