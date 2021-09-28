// Level 2
// 정확성 통과, 효율성 실패
function solution(maps) {
  const MAX_ROW = maps.length;
  const MAX_COL = maps[0].length;
  const queue = [];
  const enqueue = (el) => queue.push(el);
  const dequeue = () => queue.shift();

  enqueue([[0, 0], 1, maps]);

  while (queue.length > 0) {
    const [[curRow, curCol], count, maps] = dequeue();

    if (curRow === MAX_ROW - 1 && curCol === MAX_COL - 1) {
      return count;
    }

    const dir = [
      [curRow - 1, curCol], // UP
      [curRow, curCol + 1], // RIGHT
      [curRow + 1, curCol], // DOWN
      [curRow, curCol - 1], // LEFT
    ];

    maps[curRow][curCol] = 2;

    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = dir[i];
      if (nextRow < 0 || nextRow >= MAX_ROW) continue;
      if (nextCol < 0 || nextCol >= MAX_COL) continue;
      if (maps[nextRow][nextCol] === 0 || maps[nextRow][nextCol] === 2)
        continue;

      enqueue([[nextRow, nextCol], count + 1, maps]);
    }
  }

  return -1;
}

/*
    어디서 시간 복잡도를 줄일 수 있을까

    직진일 때 queue에 넣는 횟수를 줄여야 하나
*/
