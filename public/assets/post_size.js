export default function postSize(message) {
  const start = ['http://', 'https://', 'www.'];
  const end = ['.com', '.org', '.net', '.ru', '.io', '.gov', '.edu', '.uk', '.de', '.jp'];
  const arr = [];
  const words = message.split(' ');
  words.forEach(function(word) {
    const url = start.some(function(starting) {
      return word.includes(starting);
    });
    const domain = end.some(function(ending) {
      return word.includes(ending);
    });
    if (url & domain) {
      arr.push(word);
    }
  });
  const filter = words.filter(function(word) {
    return !arr.includes(word);
  });
  return filter.join(' ').length;
}
