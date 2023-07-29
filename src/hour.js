import {content} from './load.js' 

export default function loadHour() {
const hours = document.createElement('div');
hours.id = "hours"
hours.innerHTML='<h1>Restaurant Working Hours</h1><div class="working-hours"><div class="day">Monday</div><div class="hours">11:00 AM - 10:00 PM</div></div><div class="working-hours"><div class="day">Tuesday</div><div class="hours">11:00 AM - 10:00 PM</div></div><div class="working-hours"><div class="day">Wednesday</div><div class="hours">11:00 AM - 10:00 PM</div></div><div class="working-hours"><div class="day">Thursday</div><div class="hours">11:00 AM - 10:00 PM</div></div><div class="working-hours"><div class="day">Friday</div><div class="hours">11:00 AM - 11:00 PM</div></div><div class="working-hours"><div class="day">Saturday</div><div class="hours">12:00 PM - 11:00 PM</div></div><div class="working-hours"><div class="day">Sunday</div><div class="hours">12:00 PM - 10:00 PM</div></div></div>';
content.append(hours);
}
