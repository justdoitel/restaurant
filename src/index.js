import './style.css'
import {loadPage} from './load.js'

loadPage();

for (let x of document.querySelectorAll('header>ul>li')){
    x.addEventListener("click",(event)=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        for (let y of document.querySelectorAll('#content>*')){
            y.style.display = "none";
            for (let x of document.querySelectorAll('header>ul>li')){
                x.classList.remove("selected")
            }
        }
        document.getElementById(event.target.dataset.open).style.display="";
        event.target.classList.add("selected")
    })
}

document.querySelector('header>ul>li[data-open="home"]').click()
