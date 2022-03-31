import React from 'react';
import { numberFormat } from '../../utils';

const Card = ({ symbol, coin }) => {
  return (
    <div className="w-full col-span-2 p-8 bg-white border shadow-xl rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-baseline justify-center ">
          <span className="text-3xl md:text-4xl text-slate-600">
            {coin[symbol].name}
          </span>
          <span className="ml-2 text-sm font-semibold text-gray-400">
            {symbol}
          </span>
        </div>
        <div>
          <span className="font-bold text-green-500">
            ${numberFormat(coin[symbol].quote.USD.price)}
          </span>
          <br />
          <span className="flex justify-end text-xs font-medium text-gray-500">
            per coin
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Market Cap</h3>
          <span className="text-xl font-semibold text-gray-700">
            ${numberFormat(coin[symbol].quote.USD.market_cap)}
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400">
            Circulating Supply
          </h3>
          <span className="text-xl font-semibold text-gray-700">
            {numberFormat(coin[symbol].circulating_supply)}
            <span className="ml-1 text-sm font-semibold text-gray-500">
              {symbol}
            </span>
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Max Supply</h3>
          <span className="text-xl font-semibold text-gray-700">
            {numberFormat(coin[symbol].max_supply)}
            <span className="ml-1 text-sm font-semibold text-gray-500">
              {symbol}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
