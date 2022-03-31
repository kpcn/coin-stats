import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../containers/Layout';

const NotFound = () => {
  return (
    <Layout>
      <main className="grid h-full justify-center  py-32">
        <h1 className="text-4xl mb-2 text-red-700">Not Found</h1>
        <Link to="/">
          <button className="w-full px-3 py-3 bg-green-600 rounded-md text-white text-xl">
            Back to home
          </button>
        </Link>
      </main>
    </Layout>
  );
};

export default NotFound;
