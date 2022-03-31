import React from 'react';

const Cell = ({ mobileLabel, children, ...args }) => {
  const { className } = args;
  return (
    <div className={`p-4 ${className || ''}`}>
      {mobileLabel && (
        <div className="md:hidden">
          <span className="text-xs bg-gray-200 p-1 px-2 rounded-sm italic">
            {mobileLabel}
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Cell;
