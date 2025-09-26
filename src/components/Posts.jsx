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
    {loading ? (
      <div className="loader">
          <div className="circle"></div>
          <p>я загружаюсь...</p>
      </div>
    ) : (posts)}
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




