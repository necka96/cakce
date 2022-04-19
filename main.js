import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './style.css';

const selecetElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element
  throw new Error(`Uverite se da li ovaj $(selektor) postoji ili da li je pravilno napisan`)
}

const navBtn = selecetElement("#menu")
const menuBar = selecetElement('[role="menubar"]')

navBtn.addEventListener("click", ()=>{
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"))
  navBtn.setAttribute("aria-expanded", !isExpanded)
  menuBar.classList.toggle("hidden")
  menuBar.classList.toggle("flex")
})
var swiper5 = new Swiper(".mySwiper5", {
        grabCursor: true,
        effect: "creative",
        autoplay: true,
        loop: true,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        },
      });