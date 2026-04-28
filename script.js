const THEME = "modern"; 
const MUSIC_URL = "PUT_YOUR_MUSIC_LINK_HERE";

const CONFIG = {
  password: "1234",
  videoUrl: "https://youtu.be/fGFB29lQ-Vs?si=lVadoZtNr0OhPXnt",
  heartMessage: "You Mean Everything To Me",
  photos: ["img1.jpg","img2.jpg","img3.jpg"]
};
const MUSIC_URL = "https://youtu.be/fGFB29lQ-Vs?si=lVadoZtNr0OhPXnt";
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

music.src = MUSIC_URL;

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸";
    } else {
        music.pause();
        musicBtn.innerText = "🎵";
    }
});

function typeWriter(element, text, speed = 35) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}
const letterText = `My Love,

I don’t think words will ever truly be enough to explain what you mean to me… but I’ll spend forever trying anyway.

From the moment you came into my life, everything changed. You didn’t just bring happiness… you became it.

You are the calm in my chaos, the warmth in my coldest days, and the reason my heart feels full in ways I never knew were possible.

Being with you doesn’t just feel right… it feels like home.

And if I had to live this life all over again…  
I would still choose you.  
In every world, in every lifetime… always you.

Forever yours ❤️`;

typeWriter(document.querySelector(".letter-content"), letterText);

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