import moment from 'moment';

export function getCalendarDays(month: number, year: number) {
  const monthYear = moment([year, month]);

  let date = moment(monthYear).startOf('month').startOf('week');

  const endDate = moment(monthYear).endOf('month').endOf('week');

  let days = [date.toDate()];

  while (date.month() !== endDate.month() || date.date() !== endDate.date()) {
    date = date.add(1, 'day');
    days.push(date.toDate());
  }

  return days;
};
