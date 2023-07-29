import logo from './logo.svg'
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadHour from './hour.js'

const content = document.createElement('div')
content.id = "content"

function loadPage(){
    const header = document.createElement('header')
    const headerList = document.createElement('ul')
    const myLogo = new Image();
    myLogo.src = logo
    myLogo.alt = "Logo of El cafe";
    myLogo.dataset.open = "home";
    const homeBtn = document.createElement('li')
    homeBtn.innerText = "Home"
    homeBtn.dataset.open = "home"
    const menuBtn = document.createElement('li')
    menuBtn.innerText = "Menu"
    menuBtn.dataset.open = "menu"
    const hoursBtn = document.createElement('li')
    hoursBtn.innerText = "Hours"
    hoursBtn.dataset.open = "hours"
    headerList.append(myLogo)
    headerList.append(homeBtn)
    headerList.append(menuBtn)
    headerList.append(hoursBtn)
    header.append(headerList)
    document.body.append(header)
    document.body.append(content)
    loadHome();
    loadMenu();
    loadHour();
}

export {loadPage,content}