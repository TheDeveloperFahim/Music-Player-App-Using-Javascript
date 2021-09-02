// All necessary variables
const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let progress = document.getElementById("progress");
let isPlaying = false;
let totaleDuration = document.getElementById("duration");
let curMin = document.getElementById("curMin");
let curSec = document.getElementById("curSec");
let current_time = document.getElementById("current_time");

// Audio play function
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// Audio pause function
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

// Audio play and pause function
play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// All Music Data
const songs = [
  {
    name: "music-1",
    title: "Brocken Angle",
    artist: "Arash",
    img: "01",
  },
  {
    name: "music-2",
    title: "A dua ban mera",
    artist: "Ashwani Machal",
    img: "02",
  },
  {
    name: "music-3",
    title: "oviman",
    artist: "Tanveer Evan",
    img: "03",
  },
];

// Changing music function
const lodeSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `audio/${songs.name}.mp3`;
  img.src = `img/${songs.img}.jpg`;
};
songsIndex = 0;

// Changing music to next and prev function
const nextSong = () => {
  songsIndex = songsIndex + 1;
  lodeSong(songs[songsIndex]) % songs.length;
  playMusic();
};

const prevSong = () => {
  songsIndex = (songsIndex - 1 + songs.length) % songs.length;
  lodeSong(songs[songsIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// Progress bar function
music.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  let progressTime = (currentTime / duration) * 100;
  progress.style.width = `${progressTime}%`;

  // Music duration update function
  let minDuration = Math.floor(duration / 60);
  let secDutation = Math.floor(duration % 60);

  let totDuration = `${minDuration}:${secDutation}`;

  if (duration) {
    totaleDuration.textContent = `${totDuration}`;
  }

  if (secDutation < 10) {
    totaleDuration.textContent = `${minDuration}:0${secDutation}`;
  }

  // Music duration update function
  let currTimeSec = currentTime % 60;
  let curTimeSecRes = Math.trunc(currTimeSec);
  let currTimeMin = currentTime / 60;
  let curTimeMinRes = Math.trunc(currTimeMin);

  current_time.textContent = `${curTimeMinRes}:${curTimeSecRes}`;



  if (curTimeSecRes < 10) {
    current_time.textContent = `${curTimeMinRes}:0${curTimeSecRes}`;
  }
});
