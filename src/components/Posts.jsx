 import { useState, useEffect } from 'react';
 import convertTime from '../../public/assets/convert_time';


 export default function Posts() {
  
  const [messageArr, setMessageArr] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLoading = async () => {
    const response = await fetch('https://burtovoy.github.io/messages.json');
    const response1 = await fetch('https://burtovoy.github.io/pictures.json');
    if (response.ok && response1.ok) {
      setLoading(false);
    }
  };

   const getMessages = async () => {
    const response = await fetch(
      'https://burtovoy.github.io/messages.json'
    ).then((response) => response.json());
    setMessageArr(response.messages);
  };

  const getPictures = async () => {
    const response = await fetch(
      'https://burtovoy.github.io/pictures.json'
    ).then((response) => response.json());
    setPictures(response.pictures);
  };


  useEffect(() => {
    getMessages();
    getPictures();
    getLoading();
  }, []);

  const posts = messageArr.map((el,key) => (
    <Message
      key={el.id}
      id={el.id}
      picUrl={pictures[key]?.url}
      name={el.name}
      mail={el.mail}
      date={el.date}
      pic={el.img_message}
      message={el.message}
      quantityReposts={el.quantityReposts}
      quantityLike={el.quantityLike}
      quantityShare={el.quantityShare}
    />
  ));
  return (
    <>
    <div className="post__header">Последние сообщения</div>
    <div className='posts_and_miniposts'>
      <div className='tweet_block'>
      {loading ? (
        <div className="loader">
            <div className="circle"></div>
            <p>я загружаюсь...</p>
        </div>
      ) : (posts)}
      </div>
      <div className='minipostS_container'>
        <div className='minipost_container'>
          <div className='header_tweet'>Актуальные темы</div>
          <div className ='minipost'>
            <div className ='mini_namepost'>#javascript</div>
            <div className ='mini_qualitypost'>2 941 сообщение</div>
          </div>
          <div className ='minipost'>
            <div className ='mini_namepost'>#python3</div>
            <div className ='mini_qualitypost'>29 718 сообщений</div>
          </div>
          <div className ='minipost'>
            <div className ='mini_namepost'>#ruby</div>
            <div className ='mini_qualitypost'>958 186 сообщений</div>
          </div>
          <div className ='minipost'>
            <div className ='mini_namepost'>#как_научиться_коду?</div>
            <div className ='mini_qualitypost'>4 185 сообщений</div>
          </div>
          <div className ='minipost'>
            <div className ='mini_namepost'>#помогите_с_кодом</div>
            <div className ='mini_qualitypost'>482 сообщения</div>
          </div>
        </div>
        <div className='minipost_container'>
          <div className='header_tweet'>Интереные блогеры</div>
          <div className='trio'>
            <img className='pic' src="images/Ellipse 2.png" alt="" />
            <div className ='minipost'>
              <div className ='mini_namepost'>Хабр Научпоп</div>
              <div className ='mini_qualitypost'>@habr_popsci</div>
            </div>
            <button className='read'>Читать</button>
          </div>
          <div className='trio'>
            <img className='pic' src="images/Ellipse 3.png" alt="" />
            <div className ='minipost'>
              <div className ='mini_namepost'>Матч ТВ</div>
              <div className ='mini_qualitypost'>@MatchTV</div>
            </div>
            <button className='read'>Читать</button>
          </div>
          <div className='trio'>
            <img className='pic' src="images/Ellipse 4.png" alt="" />
            <div className ='minipost'>
              <div className ='mini_namepost'>Популярная меха...</div>
              <div className ='mini_qualitypost'>@PopMechanica</div>
            </div>
            <button className='read'>Читать</button>
          </div>
        </div>
      </div>
    </div>
    <p className="regtext">Зарегистрируйтесь и узнайте обо всём первым</p>
    </>
  )
};

const Message = ({ id, picUrl, name, mail, date, pic, message, quantityReposts, quantityLike, quantityShare }) => {
  function timeToTime(str) {
    const [datePart, timePart] = str.split(' ');
    const [day, month, year] = datePart.split('.');
    const [hours, minutes] = timePart.split(':');
    const date = new Date(year, month - 1, day, hours, minutes);
    return date;
  }
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <div className="tweet">
      <img className="avatar" src={picUrl} alt=""/>
      <div className="avname">
        <div className="post__auther">
          <div className="nnname">
            <div className="name">{name}</div>
            <div className="nname">{mail}</div>
          </div>
          <div className="timeago" data-time="${message.date}">{convertTime(timeToTime(date), now)}</div>
        </div>
        <div className="tweet__text">
        {message}
        <img className="tennis" src={pic} alt=""/>
        </div>

        <div className="group">
          <div>
            <img src="images/rep.png" alt=""/> 
            <span>{quantityReposts}</span>
          </div>
          <div>
            <img src="images/like.png" alt=""/> 
            <span>{quantityLike}</span>
          </div>
          <div>
            <img src="images/dld.png" alt=""/> 
            <span>{quantityShare}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="line"></div>
  </>
  )
};




