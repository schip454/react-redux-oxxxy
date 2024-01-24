import { MAIN_URL } from './constants';

export const request = async (query) => {
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

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getLocaleDateString = (
  date,
  { month = 'numeric', day = 'numeric', year = 'numeric' }
) =>
  new Date(date).toLocaleDateString('ru-RU', {
    month,
    day,
    year,
  });
