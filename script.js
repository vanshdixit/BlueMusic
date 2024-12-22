console.log('welcome to blueMusic');
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0
let play_gif = document.getElementById('playing_gif');
let masterPlay = document.getElementById('playBtn');
let progressBar = document.getElementById('progressBar');
let songitems = Array.from(document.getElementsByClassName('songItem'));
// let songItemPlay = document.querySelectorAll('songItemPlay')
let Closebtn = document.getElementById('Closebtn');
let confirmation = document.getElementById('confirmation')
let Yesbtn = document.getElementById('Yesbtn');
let Nobtn = document.getElementById('Nobtn');
let songInfo = document.querySelector('.songInfo')

Closebtn.addEventListener('click', function(){
    confirmation.style.display = 'block';
    document.body.style.opacity = 0.8;
    confirmation.style.opacity = 1;
    
    Yesbtn.addEventListener('click', function(){
        window.close();
    })
    Nobtn.addEventListener('click', function(){
        confirmation.style.display = 'none';
        document.body.style.opacity = 1;
    })
})
let songs = [
    {songName: 'Let me love you - Justin beiber', filePath: 'songs/1.mp3', coverPath: 'covers/cover1.jpg'},
    {songName: 'Brother - Kodaline', filePath: 'songs/2.mp3', coverPath: 'covers/cover2.jpg'},
    {songName: 'Despacito  - Luis fonsi, Daddy yankee', filePath: 'songs/3.mp3', coverPath: 'covers/cover3.png'},
    {songName: 'Shape of you - Ed sheeran', filePath: 'songs/4.mp3', coverPath: 'covers/cover4.jpg'},
    {songName: 'Hall of fame - The Script', filePath: 'songs/5.mp3', coverPath: 'covers/cover5.jpg'},
    {songName: 'Superhero - Chirs Linton, NCS', filePath: 'songs/6.mp3', coverPath: 'covers/cover6.jpg'},
    {songName: 'Gangsta\'s paradise - Coolio, Vansh dixit', filePath: 'songs/7.mp3', coverPath: 'covers/cover7.jpg'},
    {songName: 'Love your voice - Jony', filePath: 'songs/8.mp3', coverPath: 'covers/cover8.jpg'},
    {songName: 'Levitating - Dua lipa', filePath: 'songs/9.mp3', coverPath: 'covers/cover9.jpg'},
    {songName: 'Arcade - Duncan laurence', filePath: 'songs/10.mp3', coverPath: 'covers/cover10.png'}
];

songitems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    // songInfo.innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        play_gif.style.opacity = 1;
    }
    else if(audioElement.played){
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        play_gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // console.log(progress);
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', function(e){ 
        makeAllPlays();
        index = parseInt(e.target.id) 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        play_gif.style.opacity = 1;
        audioElement.play();
    })
})
