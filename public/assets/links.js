export default function linktag(message) {
  const words = message.split(' ');
  let result = '';
  const start = ['http://', 'https://', 'www.'];
  const end = ['.com', '.org', '.net', '.ru', '.io', '.gov', '.edu', '.uk', '.de', '.jp'];
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const url = start.some(function s(starting) {
      return word.includes(starting);
    });
    const domain = end.some(function g(ending) {
      return word.includes(ending);
    });
    if (url && domain) {
      result += `<a href='<${words[i]}>'${words[i]}</a> `;
    } else {
      result += `${words[i]} `;
    }
  }
  return (result.trim());
}
