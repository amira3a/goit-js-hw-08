import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.getElementById('vimeo-player');
const options = {
    autoplay: true,
    controls: true,
};
    const player = new Player(iframe, options);

player.on('timeupdate', (e) => {
    const currentTime = e.seconds;
localStorage.setItem('videoplayer-current-time', currentTime);

const savedTime = JSON.parse(localeStorage.getItem('videoplayer-current-time'));

if (savedTime) {
   savedTime = currentTime;
}


player.on('timeupdate', throttle((e) => {
    const currentTime = e.saconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}, 1000));
    
});

