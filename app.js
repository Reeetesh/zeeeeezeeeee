// get objects
let b = document.body,
d = document,
cont = document.getElementsByClassName('cont')[0],
bubCont = document.getElementsByClassName('bub-cont')[0],
objects = document.getElementsByClassName('element'),
elBody = [],
elBodyChange = [],
hits = 0,
bday = document.getElementsByClassName('bday')[0];
let colors = [
'#D81CB8',
'#05A542',
'#DE215F',
'#1CD8CE',
'#1B3F3D'];


// legs juggling
// store legs
for (let i = 0; i < 10; i++) {
  elBody[i] = document.getElementsByClassName(`element-body-${i}`);
}
// store data
elBodyChange[0] = [
'M8.2.5S.3 2.9.5 5.8s3 2.3 3.4 5.4c.3 3.1.4 4.3 2.6 5.3s2.4 5.7 2.4 5.7',
'M11.9 23.7s-3.3-2.6-3.2-4.5 1.4-2.3-1.5-5.1S4.4 12 5.7 9 3.9 7.1 4.2 3.8 7.4.5 7.4.5',
'M10.4.5s.8 1.8-1.5 3.8 0 3.1 0 3.1 1.6.4.2 2.5 1.7 2.6 1.1 4.4c-.6 1.8-1.3 3.2 1.8 4.9 0 0 1 .7.7 2.4',
'M13.5.5S8.8 4.4 9.8 5.7s5.7.7 4.4 2.4-5.1 3.1-3.3 4.2 5.5.5 4.3 2.7-4.2 1.9-3.4 3.4 4.4 2.3 4.2 4.3c-.2 1.9-2 5.3-2 5.3',
'M13.6.5s-1.3 1.7 1.2 5.1c.7 1-1.3 5.3-.3 6.7s2 4.2 1.7 5.9c-.3 1.7-1 4.7 1.9 10.9',
'M15.3.5s2.3 1.9 1.4 3c-.9 1.1-1.9 3.3.1 4.2s.5 2.6.5 2.6-3.1 2.1-1.1 6.6-.7 5.6-.3 8.1 1.9 5 1.9 5',
'M17.8.4s-.5 6.6.6 7.4c1.1.8 1 2.1-.7 3.8s-1.2 2.6 1 3.7-.8 7.7-.2 9.3c.6 1.6 1.2 2.7 1.2 2.7',
'M19.2.5s1.8 1 .5 3.8 1 3.9 1.1 6.1c.2 2.2-3.2 3.3-2.6 5.2.6 1.9 3 4.1 2.4 6.2s.5 6.1.5 6.1',
'M22.2.6s-3 .6-1.8 1.8c1.2 1.3 3.7.5 2.9 2.2-.8 1.7-3.2 2.4-1.8 3.3s3 1.4 1.8 2.7-6.3 5.9-5.3 7.7 1.1 1.7-.1 4.3c-1.2 2.6 1.7 5.2 1.7 5.2',
'M22.5.6s5.2 5.4 4.1 7.5c-1.1 2.1-7.2 8.1-6.4 10.3s2.5 1.3 2.2 2.9-.1 3.5-.1 3.5'];

elBodyChange[1] = [
'M7.3.1S2.9 2.8 3.1 5.9c.2 3.1-1.3 2.2-1 5.6s.8 4.8 3.1 5.9 2.8 6 2.8 6',
'M6.1 25.2s1.7-3 1.8-5c.1-2 1.2-2.6-1.9-5.7s-.9-1.9-1.5-5.3c-.5-3.4.6-1.9-.3-5.5C3.3.2 6.4.1 6.4.1',
'M9.7.1S6.7 1.2 8 4.2c1 2.1-.4 1.8-.2 3.4.2 1.7 3.3.4 1.8 2.6s-.9 2.7-1.5 4.7-1.5 3.4 1.9 5.3c0 0 2.4.8 2.1 2.7',
'M13 .1s-2.8 4.1-1.8 5.4 1.3 1 0 2.9-1 3.1.9 4.2 1.3.9 0 3.2-.6 1.8.8 3c3.1 2.7-.3 2.6-.6 4.7s-1.1 5.1-1.1 5.1',
'M13.1 0s-2.9 1.8-.2 5.4c.8 1.1.9 5.6 2 7.2s-1 4.4-1.3 6.2c-.3 1.8 1.3 4.7 1.8 11.5M15 .1s1 1.8 1.5 3.3c.5 1.5.9 3.1.1 4.5-1.1 2-1 1.7-1.3 3.9s1.2 1 .7 5.9c-.6 5.2 1 4.1 1.4 6.8s-1.7 5.6-1.7 5.6',
'M17.6 0s1.3 6.6.4 7.8c-1 1.3-2.8 2.4-.6 4.2 2 1.7 2.9 2.5 1 3.9-2.1 1.6-.9 8.3-.2 10 .6 1.7-1.8 3-1.8 3',
'M19.1.1s2 1 .5 4.1 1 4.2 1.2 6.5-3.4 3.5-2.8 5.6 3.2 4.3 2.6 6.6.5 6.6.5 6.6',
'M22.3.2c.1-.1-.3-.7-1.9 2-.9 1.6 1.5.2 1.3 2.3-.1 2-1.7 2.6-.2 3.6s.2 1.6-1.1 2.9.4 6.2.1 8.4c-.2 2.2 1.9 1.7.6 4.5s-3.8 5-3.8 5M22.6.2s.3 6.2 1.9 8.2c2 2.5-1 7.4-.2 9.7.9 2.3-1.5 2.6-1.8 4.3-.3 1.7-.1 3.8-.1 3.8',
'',
''];

elBodyChange[2] = [
'M7.8.1S4.5 2.4 4.7 5.5c.2 3.1.5 2.9.8 6.2.4 3.3-1.9 4.2.4 5.4 1.4.7 2 4.6.7 6.9',
'M4.5 24.7s3.7-2.8 3.8-4.8c.1-2-2.2-2.3-1.6-5.4.8-4.2-3-2.2-1.6-5.3s.8-2.3-1.6-5.6C1.5.7 7 .1 7 .1',
'M10.2.1S9.7 2 7.2 4s2.6 3.5 2.6 3.5.4.3-1 2.5.5 2.9-.2 4.8-.1 3.3 3.3 5.1c0 0-1.4 2.2-1.7 4',
'M13.4.1s-5 4.1-3.9 5.5 3.7.7 2.3 2.6-3.1 3.2-1.2 4.4 3.4.8 2 3.1-2 1.8-1.1 3.3c.9 1.5 2.6 2.6 2.4 4.7-.2 2.1 0 5.4 0 5.4',
'M13.5 0s-1.3 1.8 1.3 5.4c.8 1.1-1.4 5.3-2.3 7-1.2 2 .2 6.4 2.3 6.5 1.8.1.5 4.9 3.6 11.4',
'M15.3.1s2.5 2 1.5 3.2-5.6 3.2-3.6 4.1 2.6 3.1 2.6 3.1 2.9 2.9.3 6.9c-2.7 4.4-.8 5.9-.3 8.5S13 29.8 13 29.8',
'M17.9 0s-1.6 6.5-1.3 7.8c.5 2.3 4.8 2.3 2.9 4.1-1.9 1.8-3 2.6-.7 3.8s-.8 8.2-.2 9.8-2.8 3.3-2.8 3.3',
'M19.5.1s-1 1.6 1.5 3.8c2.5 2.2-4 4.3-1 7 1.8 1.6 1.4 3.4 2 5.4s-.5 4.1-1.1 6.4-2.7 6-2.7 6',
'M22.6.2s-3.1.6-1.9 1.9 3.9.5 3 2.3-3.3 2.6-1.9 3.5 3.2 1.5 1.9 2.8c-1.3 1.3-6.7 6.2-5.6 8.1 1.1 1.9 1.1 1.8-.1 4.5-1.3 2.8 1.8 5.5 1.8 5.5',
'M22.9.2s1.2 5.8 0 8-1.3 6.8-.5 9.1.7 3.1.4 4.7c-.3 1.7-2.3 4.1-2.3 4.1'];


// move legs
setInterval(() => {
  myLoop({
    cd: 2,
    dur: 150,
    cb: ({
      cd }) =>
    {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < elBody[i].length - 1; j++) {
          elBody[i][j].setAttribute('d', elBodyChange[cd][i]);
        }
      }
    } });

}, 500);

// detect mouse pos
b.addEventListener('mousemove', event => {
  mouseMove(event.pageX, event.pageY, objects);
});
b.addEventListener('touchmove', event => {
  mouseMove(event.touches[0].pageX, event.touches[0].pageY, objects);
});

function mouseMove(hoverX, hoverY, objects) {
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;

  let xDeg = -(halfWidth - hoverX) / 2;
  let yDeg = (halfHeight - hoverY) / 2;

  for (let i = 0; i < objects.length; i++) {
    let e = objects[i];
    if (i < 15) {
      if (e.classList.contains('diamond')) {
        e.style.transform = 'rotate(45deg) translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      } else if (e.classList.contains('circle')) {
        e.style.transform = 'rotate(-20deg) translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      } else {
        e.style.transform = 'translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      }
    } else if (e.classList.contains('circle')) {
      e.style.transform = 'rotate(340deg) translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
    } else {
      if (e.classList.contains('diamond')) {
        e.style.transform = 'rotate(45deg) translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
      } else {
        e.style.transform = 'translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
      }
    }
  }
};

// click handle
for (let i = 0; i < objects.length; i++) {
  objects[i].addEventListener('click', () => {
    for (let j = 0; j < 25; j++) {
      let bub = [];
      bub[j] = new Bubble(objects[i]);
    }
    objects[i].classList.add('element--explode');
    bday.innerHTML += text[hits];
    hits++;
    if(hits==25)
{
    confetti.start()
}
  });
  
}

class Bubble {
  constructor(e) {
    this.e = createElement('span', 'bubble');
    this.e.style.top = e.offsetTop + 'px';
    this.e.style.left = e.offsetLeft + 'px';
    this.e.style.borderColor = colors[random(0, colors.length - 1)];
    if (e.classList.contains('circle')) {
      this.e.classList.add('circle');
    }
    bubCont.appendChild(this.e);
    setTimeout(() => {
      bubCont.removeChild(this.e);
    }, 1000);
  }}


/* start Hidden, you can’t read this */
const text = ['H', 'a', 'p', 'p', 'y', ' ', 'B', 'i', 'r', 't', 'h', 'd', 'a', 'y', ' ', 'A', 'N', 'U', 'D', 'A', 'R', 'S', 'H', 'I',"💖"];
/* end Hidden */

/******************************/
/* Functions for an easy life */
/******************************/
// createElement(tag, classList, value)
function createElement(tag, classList, value = '') {
  let el = d.createElement(tag);
  el.className = classList;
  el.innerHTML = value;
  return el;
}
// random(min, max);
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// myLoop
// pass number of iterations and dur in ms and counter
function myLoop({
  cd = 0,
  dur = 100,
  cu = 0,
  cb,
  final })
{
  // passes usefull stuff to callback and augmet the count up by 1
  cb({
    cd,
    dur,
    cu });

  cu++;
  // decrement cd and call myLoop again if cd >= 0
  if (--cd >= 0) {
    setTimeout(function () {
      myLoop({
        cd: cd,
        dur: dur,
        cu: cu,
        cb: cb });

    }, dur);
  }
}

