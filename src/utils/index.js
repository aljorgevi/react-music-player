export const playAudio = (isPLaying, audioRef) => {
  if (isPLaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => audioRef.current.play());
    }
  }
};
