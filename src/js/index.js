import {userName} from "./vars"
import "particles.js/particles.js";

import style from "../css/style.css";

document.getElementById("uname").innerHTML = userName

particlesJS.load('particles-js', './js/particles.json', function() {
  console.log('callback - particles-js config loaded');
});