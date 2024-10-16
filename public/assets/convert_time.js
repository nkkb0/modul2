export default function convertTime(posted, now) {
  const seconds = (now - posted) / 1000;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);
  const years = Math.floor(seconds / 31536000);
  const mEnd = String(minutes).at(-1);
  const mEnd2 = String(minutes).at(-2);
  const hEnd = String(hours).at(-1);
  const dEnd = String(days).at(-1);
  const yEnd = String(years).at(-1);
  if (years > 0) {
    if (Number(yEnd) === 1) {
      return `${years} год назад`;
    }
    if (Number(yEnd) > 1 && Number(yEnd) < 5) {
      return `${years} года назад`;
    }
    if (Number(yEnd) >= 5 || Number(yEnd) === 0) {
      return `${years} лет назад`;
    }
  }
  if (days > 0) {
    if (Number(dEnd) === 1) {
      return `${days} день назад`;
    }
    if (Number(dEnd) > 1 && Number(dEnd) < 5) {
      return `${days} дня назад`;
    }
    if (Number(dEnd) >= 5 || Number(yEnd) === 0) {
      return `${days} дней назад`;
    }
  }
  if (hours > 0) {
    if (Number(hEnd) === 1) {
      return `${hours} час назад`;
    }
    if (Number(hEnd) > 1 && Number(yEnd) < 5) {
      return `${hours} часа назад`;
    }
    if (Number(hEnd) >= 5 || Number(yEnd) === 0) {
      return `${hours} часов назад`;
    }
  }
  if (minutes > 0) {
    if (Number(mEnd) === 1 && Number(mEnd2) !== 1) {
      return `${minutes} минуту назад`;
    }
    if (Number(mEnd) > 1 && Number(mEnd) < 5 && Number(mEnd2) !== 1) {
      return `${minutes} минуты назад`;
    }
    if (Number(mEnd) >= 5 || Number(yEnd) === 0 || (Number(mEnd2) === 1)) {
      return `${minutes} минут назад`;
    }
  }
  return 'меньше минуты назад';
}
