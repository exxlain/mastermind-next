const addZero = (time: number): string=>{
  return `00${time}`.slice(-2);
}
const convertTimeForScreen =(allSeconds: number): string=>{
  const hours = Math.floor(allSeconds/3600)
  const minutes = Math.floor(allSeconds%3600/60);
  const seconds = allSeconds%60;
  return hours>0 ? `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}` : `${addZero(minutes)}:${addZero(seconds)}`
}

export default convertTimeForScreen;
