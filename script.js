const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const restartBtn = document.querySelector(".restart-btn");
const languageToggle = document.querySelector(".language-toggle");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

const COLORS = ['#FF3366', '#FF9933', '#FF33FF', '#33CCFF', '#FFDD33'];
const EMOJIS = ['❤️', '💖', '💝', '💘', '💕', '💗', '🌸', '🎉'];

let currentLang = 'ar';

const translations = {
    en: {
        question: "Do You Love D7MOS ?",
        yesResponse: "D7MOS Love You Too 💖",
        yes: "Yes",
        no: "No"
    },
    ar: {
        question: "هل بتحب دحموس ؟",
        yesResponse: "💖 دحموس كمان بحبك",
        yes: "نعم",
        no: "لا"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    question.textContent = translations[lang].question;
    yesBtn.textContent = translations[lang].yes;
    noBtn.textContent = translations[lang].no;
}

function moveNoButton() {
    const safeZone = 30;
    const maxX = document.documentElement.clientWidth - noBtn.offsetWidth - safeZone;
    const maxY = document.documentElement.clientHeight - noBtn.offsetHeight - safeZone;
    
    const randomX = Math.max(safeZone, Math.min(
        Math.random() * document.documentElement.clientWidth, 
        maxX
    ));
    
    const randomY = Math.max(safeZone, Math.min(
        Math.random() * document.documentElement.clientHeight, 
        maxY
    ));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '1000';
}

restartBtn.addEventListener("click", () => {
    updateLanguage(currentLang);
    gif.src = "https://i.giphy.com/media/3OhXBaoR1tVPW/giphy.gif";
    btnGroup.style.display = 'flex';
    
    noBtn.style.position = 'relative';
    noBtn.style.left = 'auto';
    noBtn.style.top = 'auto';
    noBtn.style.transform = 'none';
    noBtn.style.zIndex = 'auto';
});

yesBtn.addEventListener("click", () => {
    question.textContent = translations[currentLang].yesResponse;
    gif.src = "https://i.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif";
    btnGroup.style.display = 'none';
    
    for(let i = 0; i < 300; i++) {
        createConfetti(i);
    }
});

function createConfetti(index) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    const startX = Math.random() * 100;
    confetti.style.setProperty('--x', `${Math.random() * 200 - 100}%`);
    confetti.style.left = `${startX}%`;
    confetti.style.animationDelay = `${index * 0.03}s`;
    confetti.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    confetti.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

languageToggle.addEventListener("click", toggleLanguage);
