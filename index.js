const SUNDAY = 0;

/**
 * @param year {number} 연도
 * @param month {number} 달
 */
export function getMonth(year, month) {
  const date = new Date(`${year}-${month}`);

  const beforeMonth = new Date(date);
  const nextMonth = new Date(date);

  beforeMonth.setMonth(date.getMonth() - 1);
  nextMonth.setMonth(date.getMonth() + 1);

  const beforeMonthLastWeek = getLastWeek(beforeMonth);
  const nextMonthFirstWeek = getFirstWeek(nextMonth);
  const weeks = getWeeks(date);

  if (weeks[0].length < 7) {
    const temp = [...beforeMonthLastWeek, ...weeks[0]];
    weeks[0] = temp;
  }

  const lastIndex = weeks.length - 1;
  if (weeks[lastIndex].length < 7) {
    const temp = [...weeks[lastIndex], ...nextMonthFirstWeek];
    weeks[lastIndex] = temp;
  }

  return weeks;
}

function getWeeks(_date) {
  const weeks = [];
  const date = new Date(_date);
  date.setDate(1);

  let week = [];
  while (true) {
    week.push(new Date(date));

    date.setDate(date.getDate() + 1);

    if (date.getMonth() != _date.getMonth()) {
      weeks.push(week);
      week = [];
      break;
    }

    if (date.getDay() == SUNDAY) {
      weeks.push(week);
      week = [];
    }
  }

  return weeks;
}

function getLastWeek(date) {
  const weeks = getWeeks(date);

  return weeks[weeks.length - 1];
}

function getFirstWeek(date) {
  const weeks = getWeeks(date);

  return weeks[0];
}
