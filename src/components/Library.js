import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPLaying }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPLaying={isPLaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
