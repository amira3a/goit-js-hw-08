import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.getElementById('vimeo-player');
const options = {
    autoplay: true,
    controls: true,
};
const player = new Player(iframe, options);
const STORAGE_KEY = 'videoplayer-current-time';    

player.on('timeupdate', throttle(onPlay, 1000));
onPageReload();   
function onPlay (e) {
    const currentTime = e.seconds;
localStorage.setItem(STORAGE_KEY, currentTime);
}
function onPageReload() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (!savedTime) {
        return;
    }
    player.setCurrentTime(savedTime);
}