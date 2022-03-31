import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import Layout from './Layout';

const CoinDetail = () => {
  const { symbol } = useParams();
  return (
    <Layout>
      <main>
        <Detail symbol={symbol} />
      </main>
    </Layout>
  );
};

export default CoinDetail;
