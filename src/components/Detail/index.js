import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils';
import ErrorMessage from '../Common/ErrorMessage';
import DataLoading from '../Common/Loading';
import Card from './Card';

const Detail = ({ symbol }) => {
  const { data: coin, error } = useSWR(
    `/v1/cryptocurrency/quotes/latest?symbol=${symbol}`,
    fetcher
  );

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  if (!coin) {
    return <DataLoading />;
  }

  return (
    <div className="grid grid-cols-1 m-2 lg:m-0 lg:grid-cols-3">
      {coin.data && <Card symbol={symbol} coin={coin.data} />}
    </div>
  );
};

export default Detail;
