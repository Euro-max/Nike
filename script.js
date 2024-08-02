const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const hero=document.getElementById('hero')
const herob=document.getElementById("hero")

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  
  herob.classList.toggle('heros')
  hero.style.padding="80 0 0 0";
})