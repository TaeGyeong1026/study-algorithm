// Level 2
// 통과
function solution(record) {
  const user = {};
  const log = [];

  record.forEach((el) => {
    const splited = el.split(" ");
    if (splited[0] !== "Leave") {
      user[splited[1]] = { name: splited[2] };
    }

    return splited[0] !== "Change" ? log.push(splited) : null;
  });

  return log.map((el) => {
    const name = user[el[1]].name;
    switch (el[0]) {
      case "Enter":
        return `${name}님이 들어왔습니다.`;
      case "Leave":
        return `${name}님이 나갔습니다.`;
      default:
        return;
    }
  });
}
