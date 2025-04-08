const images = document.querySelectorAll(".image");
const audioFiles = [
    "audio/Ye Chota Nuvvunna.mp3",
    "audio/Ta Takkara.mp3",
    "audio/Psycho Saiyaan.mp3",
    "audio/Sulthana.mp3", 
    "audio/Fire.mp3"
];


let currentAudio=null;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime=0;
        }
        currentAudio = new Audio(audioFiles[index]);
        currentAudio.play();
    });
});