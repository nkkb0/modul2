/* eslint-env browser */
import convertTime from './convert_time.js';

const loader = document.querySelector('.loader');
fetch('https://burtovoy.github.io/messages.json').then((res) => {
  if (res.ok) {
    loader.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', async function () {
  const ap1 = await fetch('https://burtovoy.github.io/statistic.json');
  const staticc = await ap1.json();
  const statics = document.querySelector('.statics');

  Object.keys(staticc).forEach((key) => {
    statics.innerHTML += `
    <div class="static__items">
      <div class="static__number">${staticc[key].usersRegistr}</div>
      <div class="static__text"> Пользователей зарегестрировано</div>
    </div>

    <div class="static__items">
      <div class="static__number">${staticc[key].writMessages}</div>
      <div class="static__text"> Сообщений написано</div>
    </div>

    <div class="static__items">
      <div class="static__number">${staticc[key].writToday}</div>
      <div class="static__text"> Написано сегодня</div>
    </div>`;
  });

  const ap2 = await fetch('https://burtovoy.github.io/messages.json');
  const messages = await ap2.json();
  const messagesArr = messages.messages;

  const ap3 = await fetch('https://burtovoy.github.io/pictures.json');
  const avName = await ap3.json();
  const avNameArr = avName.pictures;

  const posts = document.querySelector('.posts');
  let now = new Date();
  now = now.toISOString();

  messagesArr.forEach((message, index) => {
    const ava = avNameArr[index];
    const post = `
        <div class="tweet">
          <img class="avatar" src=${ava.url} alt="">
          <div class="avname">
            <div class="post__auther">
              <div class="nnname">
                <div class="name">${message.name}</div>
                <div class="nname">${message.mail}</div>
              </div>
              <div class="timeago">${convertTime(messagesArr.date, now)}</div>
            </div>
            <div class="tweet__text">
            ${message.message}
            <img class="tennis" src=${message.img_message} alt="">
            </div>

            <div class="group">
              <div>
                <img src="images/rep.png" alt=""> 
                <span>${message.quantityReposts}</span>
              </div>
              <div>
                <img src="images/like.png" alt=""> 
                <span>${message.quantityLike}</span>
              </div>
              <div>
                <img src="images/dld.png" alt=""> 
                <span>${message.quantityShare}</span>
              </div>
            </div>
          </div>
        </div>

      <div class="line"></div> `;
    posts.innerHTML += post;
  });
});
