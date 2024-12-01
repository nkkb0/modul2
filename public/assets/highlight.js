export default function highlightHashtags(text) {
  const arrtext = text.split(' ');
  let result = '';
  for (let i = 0; i < arrtext.length; i += 1) {
    if (arrtext[i][0] === '#') {
      const a = arrtext[i].slice(1);
      result += `<a href="/search?tag=${a}" >${arrtext[i]}</a> `;
    } else {
      result += `${arrtext[i]} `;
    }
  }
  return (result.trim());
}
