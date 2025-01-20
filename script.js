console.log("Welcome to spotify");
// initializae the variable
let songsIndex = 0;
let audioElement = new Audio('1.mp4') ;
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songs= [
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
    {SongName:"Salam-e-Ishq" , filepath:"song/1.mp4" , coverpath:"girllll.jpg"}
]
// let audioElement = new audio("1.mp4");
// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// listen to Events
myprogressbar.addEventListener('timeupdate' , ()=>{
console.log('timeupdate')
// update seekbaar
})
