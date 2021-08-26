const Song = ({ currentSong }) => {
  const { cover, name, artist } = currentSong;
  return (
    <div className='song-container'>
      <img src={cover} alt={name}></img>
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
