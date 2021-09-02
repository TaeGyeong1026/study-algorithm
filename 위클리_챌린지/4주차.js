// Level 1
// 통과
function solution(table, languages, preference) {
  const splited = table.map((el) => {
    return el.split(" ").reverse();
  });

  const result = [];

  for (let i = 0; i < splited.length; i++) {
    result.push(
      splited[i].reduce((acc, language, index) => {
        const indexOf = languages.indexOf(language);
        return indexOf !== -1 ? acc + preference[indexOf] * (index + 1) : acc;
      }, 0)
    );
  }

  const MAX = Math.max(...result);
  const resultLang = splited
    .map((el, index) => {
      return result[index] === MAX ? splited[index][5] : null;
    })
    .sort();

  return resultLang[0];
}
