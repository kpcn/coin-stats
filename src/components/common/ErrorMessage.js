import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <div className="grid justify-center py-24">
      <h2 className="text-xl text-red-500">{children}</h2>
    </div>
  );
};

export default ErrorMessage;
