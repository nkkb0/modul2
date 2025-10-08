import { useState, useEffect } from 'react';

const Statistic = () => {
  let statDefault = '';
  const [stat, setStat] = useState(statDefault);

  const getApiStatistic = async () => {
    const response = await fetch(
      'https://burtovoy.github.io/statistic.json'
    ).then((response) => response.json());
    setStat(response.statistic);
  };

  useEffect(() => {
    getApiStatistic();
  }, []);
  return (
    <>
    <div className="people">
      <img src="images/cover1.png" alt="люди у костра"></img>
    </div>
    <div className="statics">
      <div className="static__items">
        <div className="static__number">{stat.usersRegistr}</div>
        <div className="static__text">Пользователей зарегистрировано</div>
      </div>
      <div className="static__items">
        <div className="static__number">{stat.writMessages}</div>
        <div className="static__text">Сообщений написано</div>
      </div>
      <div className="static__items">
        <div className="static__number">{stat.writToday}</div>
        <div className="static__text">Написано сегодня</div>
      </div>
    </div>
    </>
  );
}
export default Statistic;