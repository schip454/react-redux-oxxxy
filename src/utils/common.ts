import { MAIN_URL } from './constants';
import moment from 'moment';

export const request = async (query: string) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const sortByDate = (arr) => {
//   return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
// };

export const getLocaleDateString = (
  date: string,
  {
    month = 'numeric',
    day = 'numeric',
    year = 'numeric',
  }: Intl.DateTimeFormatOptions
) =>
  new Date(date).toLocaleDateString('ru-RU', {
    month,
    day,
    year,
  });

export const secondToMMSS = (seconds: number) =>
  moment.utc(seconds * 1000).format('mm:ss');
