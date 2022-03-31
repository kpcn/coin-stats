import React from 'react';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../utils';
import Cell from './Cell';

const LineItem = ({ name, symbol, quote, circulating_supply }) => {
  return (
    <Link to={`/detail/${symbol}`}>
      <div
        className="grid items-center grid-cols-2 px-2 py-2 my-4 bg-white rounded-md shadow-sm md:grid-cols-3 
                  lg:grid-cols-4 md:first-of-type:mt-0 hover:cursor-pointer hover:shadow-lg"
      >
        <Cell className="col-span-2 md:col-auto">
          <strong className="pr-2 text-3xl sm:text-xl text-slate-600 sm:pr-0">
            {name}
          </strong>{' '}
          <span className="text-slate-500">{symbol}</span>
        </Cell>
        <Cell mobileLabel="Price">
          <span className="tracking-wide">
            ${numberFormat(quote.USD.price, 2)}
          </span>
        </Cell>
        <Cell mobileLabel="Market Cap">
          <span className="tracking-wide">
            ${numberFormat(Math.round(quote.USD.market_cap), 0)}
          </span>
        </Cell>
        <Cell className="hidden lg:block">
          <span className="tracking-wide">
            {numberFormat(circulating_supply)}{' '}
          </span>
          <span className="italic text-slate-500 ">{symbol}</span>
        </Cell>
      </div>
    </Link>
  );
};

export default LineItem;
