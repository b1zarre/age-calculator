import dayjs from 'dayjs';

export const calculateAge = (day: string, month: string, year: string) => {
  const currentDate = dayjs(new Date());
  const birthDate = dayjs(`${year}-${month}-${day}`);
  const years = currentDate.diff(birthDate, 'year');
  const months = currentDate.diff(birthDate.add(years, 'year'), 'month');
  const days = currentDate.diff(
    birthDate.add(years, 'year').add(months, 'month'),
    'day',
  );
  return {
    days,
    months,
    years,
  };
};
