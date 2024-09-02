export default function useMediaQuery(query) {

  const media = window.matchMedia(query);
  const matches = media.matches;

  if (matches){
    return true;
  }

  return false;
}