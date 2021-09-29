// Level 2
// 통과
function solution(s) {
  let count = 0;

  const isValid = (s) => {
    const stack = [];
    const pair = {
      "{": "}",
      "(": ")",
      "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
      const ref = s[i];
      const stackTop = stack[stack.length - 1];
      if (ref === "}" || ref === ")" || ref === "]") {
        if (ref !== pair[stackTop]) return false;
        stack.pop();
      } else {
        stack.push(ref);
      }
    }

    return stack.length === 0 ? true : false;
  };

  for (let i = 0; i < s.length; i++) {
    const left = s.substring(0, i);
    const right = s.substring(i);
    if (isValid(right + left)) count++;
  }

  return count;
}
