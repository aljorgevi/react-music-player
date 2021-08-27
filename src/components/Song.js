const Song = ({ currentSong, libraryStatus, isPLaying }) => {
  const { cover, name, artist } = currentSong;
  return (
    <div className={`song-container ${libraryStatus ? 'active' : ''}`}>
      <img
        src={cover}
        alt={name}
        className={`song-cover ${isPLaying ? 'rotateSong' : ''}`}
      ></img>
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
