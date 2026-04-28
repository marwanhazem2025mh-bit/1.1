const THEME = "modern"; 
const MUSIC_URL = "PUT_YOUR_MUSIC_LINK_HERE";

const CONFIG = {
  password: "1234",
  videoUrl: "https://youtu.be/fGFB29lQ-Vs?si=lVadoZtNr0OhPXnt",
  heartMessage: "You Mean Everything To Me",
  photos: ["img1.jpg","img2.jpg","img3.jpg"]
};

const LETTER = `My Love,

I don’t think words will ever be enough to explain what you mean to me… but I’ll spend forever trying anyway.

From the moment you came into my life, everything changed. You became my peace, my happiness, and the reason behind so many of my smiles.

If I had to choose again… I would still choose you. Every time. In every life.

Forever yours ❤️`;

let currentPhoto = 0;

/* INIT */
document.body.classList.add(THEME);
document.getElementById("videoFrame").src = CONFIG.videoUrl;
document.getElementById("heartMsg").innerText = CONFIG.heartMessage;
document.getElementById("photoDisplay").src = CONFIG.photos[0];
document.getElementById("letterText").innerText = LETTER;

const music = document.getElementById("bgMusic");
music.src = MUSIC_URL;

/* FUNCTIONS */

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const msg = document.getElementById("message");

    if(input === CONFIG.password){
        nextPage("letterPage");
        music.play();
    } else {
        msg.innerText = "Wrong password 💔";
        msg.style.color = "red";
    }
}

function nextPage(id){
    document.querySelectorAll(".container").forEach(c=>c.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function toggleMusic(){
    music.paused ? music.play() : music.pause();
}

function nextPhoto(){
    currentPhoto = (currentPhoto+1)%CONFIG.photos.length;
    document.getElementById("photoDisplay").src = CONFIG.photos[currentPhoto];
}

function prevPhoto(){
    currentPhoto = (currentPhoto-1+CONFIG.photos.length)%CONFIG.photos.length;
    document.getElementById("photoDisplay").src = CONFIG.photos[currentPhoto];
}