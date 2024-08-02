// audioController.js
const audio = new Audio('/game-bgm.mp3'); // Path to your audio file
audio.loop = true; // Enable looping
audio.volume = 0.5; // Set volume (0.0 to 1.0)

export function playMusic() {
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

export function pauseMusic() {
    audio.pause();
}