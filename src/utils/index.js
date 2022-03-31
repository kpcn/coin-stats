export const numberFormat = (num, fixPoint) =>
  `${parseInt(num)
    .toFixed(fixPoint)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;

export const fetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY,
    },
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    throw error;
  }

  return res.json();
};
