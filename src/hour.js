import {content} from './load.js' 

function makeSchedule (whatday,whattime){
    const row = document.createElement('div');
    row.classList.add("working-hours")
    const day = document.createElement('div');
    day.classList.add("day")
    day.innerText = whatday
    const time = document.createElement('div')
    time.classList.add('hours')
    time.innerText = whattime
    row.append(day)
    row.append(time)
    return row;
}

export default function loadHour() {
const hours = document.createElement('div');
hours.id = "hours"
const title = document.createElement('h1');
title.innerText = "Restaurant Working Hours"
hours.append(title)
hours.append(makeSchedule("Monday", "11:00 AM - 10:00 PM"))
hours.append(makeSchedule("Tuesday", "11:00 AM - 10:00 PM"))
hours.append(makeSchedule("Wednesday", "11:00 AM - 10:00 PM"))
hours.append(makeSchedule("Thursday", "11:00 AM - 10:00 PM"))
hours.append(makeSchedule("Friday", "11:00 AM - 10:00 PM"))
hours.append(makeSchedule("Saturday", "12:00 PM - 11:00 PM"))
hours.append(makeSchedule("Sunday", "12:00 PM - 10:00 PM"))

content.append(hours);
}
