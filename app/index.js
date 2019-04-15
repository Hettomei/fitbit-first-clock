import clock from "clock";
import document from "document";
import * as util from "../common/utils";
import { display } from "display";


// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const displayTime = document.getElementById("displayTime");
const displayDate = document.getElementById("displayDate");

clock.ontick = ({ date }) => {
    const hours = util.zeroPad(date.getHours());
    const mins = util.zeroPad(date.getMinutes());
    const sec = util.zeroPad(date.getSeconds());
    displayTime.text = `${hours}:${mins}:${sec}`;

    displayDate.text = `${date.getFullYear()}-${util.zeroPad(date.getMonth())}-${util.zeroPad(date.getDate())}`;
}

const alwaysOn = document.getElementById("alwaysOn");
let i = 0;

alwaysOn.onclick = function(evt) {
    if (i % 2) {
        console.log("you clicked on");
        alwaysOn.style.fill = "inherit";
        alwaysOn.text = "off";
        display.autoOff = true;
    } else {
        console.log("click off");
        alwaysOn.style.fill = "green";
        alwaysOn.text = "on";
        display.autoOff = false;
    }
    i++;
}
