const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPLaying }) => {
  const { cover, name, artist, id } = song;

  const songSelectHandler = () => {
    const selectedSong = song;
    setCurrentSong(selectedSong);
    // check if the song is playing
    if (isPLaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => audioRef.current.play());
      }
    }
  };

  return (
    <div className='library-song' onClick={songSelectHandler}>
      <img src={cover} alt={name}></img>
      <div className='song-description'>
        <h3>{name}</h3>

        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
