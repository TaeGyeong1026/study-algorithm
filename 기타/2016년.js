// Level 1
// 통과
function solution(a, b) {
  const doomsday = [4, 29, 0, 4, 9, 6, 11, 8, 5, 10, 7, 12];
  const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dayIndex =
    b >= doomsday[a - 1]
      ? (b - doomsday[a - 1]) % 7
      : 7 - ((doomsday[a - 1] - b) % 7);
  return day[dayIndex];
}

/*
둠스데이 알고리즘 사용

짝수
2월의 마지막날, 윤년이므로 29일
4월 4일
6월 6일
8월 8일
10월 10일
12월 12일

5월 9일
9월 5일

7월 11일
11월 7일

1월 3일(윤년의 경우 1월 4일)
3월 0일(3월 1일의 전날, 2월의 마지막날)

위 날짜들은 모두 요일이 같다

즉 2016년 1월 1일이 금요일이면
1월 4일은 월요일이므로 2016년의 위 날짜들은 모두 월요일
*/
