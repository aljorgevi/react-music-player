const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPLaying,
  setSongs,
}) => {
  const { cover, name, artist, id, active } = song;

  const songSelectHandler = async () => {
    const selectedSong = song;
    await setCurrentSong(selectedSong);
    // Add active state
    const newSongs = songs.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // check if the song is playing
    if (isPLaying) audioRef.current.play();
  };

  return (
    <div
      className={`library-song ${active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={name}></img>
      <div className='song-description'>
        <h3>{name}</h3>

        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
