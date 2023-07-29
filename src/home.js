import food from './food.jpg'
import {content} from './load.js' 


export default function loadHome() {
const home = document.createElement('div')
home.id = "home"
const introwrap = document.createElement('div')
introwrap.classList.add('intro-wrap')
const foodImg = new Image()
foodImg.src=food
foodImg.alt = "food"
const intro = document.createElement('div')
intro.id= "intro"
const headingText = document.createElement('h1')
const subText = document.createElement('h1')
headingText.innerText = "Welcome to EL Cafe"
subText.innerText = "Sensational coffee shop experience in the virtual world."
intro.append(headingText)
intro.append(subText)
introwrap.append(foodImg)
introwrap.append(intro)
home.append(introwrap)
content.append(home);
}