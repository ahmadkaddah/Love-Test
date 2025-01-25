const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const restartBtn = document.querySelector(".restart-btn");
const languageToggle = document.querySelector(".language-toggle");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

let currentLang = 'ar';

const translations = {
    en: {
        question: "Do You Love Me?",
        yesResponse: "I Love You Too! 💖",
        yes: "Yes",
        no: "No"
    },
    ar: {
        question: "هل تحبني؟",
        yesResponse: "أنا أيضاً أحبك! 💖",
        yes: "نعم",
        no: "لا"
    }
};

// تبديل اللغة
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguage(currentLang);
}

// تحديث النصوص
function updateLanguage(lang) {
    question.textContent = translations[lang].question;
    yesBtn.textContent = translations[lang].yes;
    noBtn.textContent = translations[lang].no;
}

// حركة زر "لا"
function moveButton() {
    const btn = noBtn;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 60) + 30;
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 60) + 30;
    
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${ypx`;
}

// تأثير الكونفيتي
yesBtn.addEventListener("click", () => {
    question.textContent = translations[currentLang].yesResponse;
    gif.src = "https://i.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif";
    btnGroup.style.display = 'none';

    for (let i = 0; i < 150; i++) {
        createConfetti(i);
    }
});

// إنشاء القلوب
function createConfetti(i) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = i * 0.1 + 's';
    confetti.textContent = ['❤️', '💖', '💘'][Math.floor(Math.random() * 3)];
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// إعادة التعيين
restartBtn.addEventListener("click", () => {
    gif.src = "https://i.giphy.com/media/3OhXBaoR1tVPW/giphy.gif";
    btnGroup.style.display = 'flex';
    noBtn.style = '';
});

// الأحداث
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});
languageToggle.addEventListener("click", toggleLanguage);
