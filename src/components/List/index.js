import React from 'react';
import useSWR from 'swr';
import Header from './Header';
import { fetcher } from '../../utils';
import LineItem from './LineItem';
import ErrorMessage from '../common/ErrorMessage';
import DataLoading from '../common/Loading';

const List = () => {
  const { data: coins, error } = useSWR(
    `/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD`,
    fetcher
  );

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  if (!coins) {
    return <DataLoading />;
  }

  const headings = ['Name', 'Price', 'Market Cap', 'Circulating Supply'];

  return (
    <div className="px-2 lg:px-0">
      <Header names={headings} />
      {coins.data &&
        coins.data.map((coin) => <LineItem key={coin.id} {...coin} />)}
    </div>
  );
};

export default List;
