const questions = document.querySelector(".question");
const gif = document.querySelector(".gif")
const siBtn = document.querySelector(".si-btn")
const noBtn = document.querySelector(".no-btn")

siBtn.addEventListener("click", ()=> {
    questions.innerHTML = "Siempre lo supe de ti";
    gif.src="https://th.bing.com/th/id/R.67abf8c144d06a900ee124434950f215?rik=emK2RCj9iYft0A&pid=ImgRaw&r=0"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px"
})