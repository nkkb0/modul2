/* eslint-env browser */
const popuplinks = document.querySelectorAll('.popup-link_reg');
const popUpreg = document.getElementById('popup1');
let touchstartY;
let touchendY;
for (let i = 0; i < popuplinks.length; i += 1) {
  const popuplink = popuplinks[i];
  popuplink.addEventListener('click', () => {
    popUpreg.classList.add('open');
  });
}

document.addEventListener('touchstart', (e) => {
  touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchendY = e.changedTouches[0].screenY;
  if (touchendY > touchstartY) {
    popUpreg.classList.remove('open');
  }
});

const popuplinksEnt = document.querySelectorAll('.popup-link_ent');
const popUpent = document.getElementById('popup2');

for (let i = 0; i < popuplinksEnt.length; i += 1) {
  const popuplink = popuplinksEnt[i];
  popuplink.addEventListener('click', () => {
    popUpent.classList.add('open');
  });
}

document.addEventListener('touchstart', (e) => {
  touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchendY = e.changedTouches[0].screenY;
  if (touchendY > touchstartY) {
    popUpent.classList.remove('open');
  }
});
