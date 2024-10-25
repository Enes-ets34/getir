import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex space-x-4 animate-pulse">
      <div className="h-12 w-12 bg-primaryLight rounded-full"></div>
      <div className="flex-1 space-y-4">
        <div className="h-4 bg-primaryLight rounded"></div>
        <div className="h-4 bg-primaryLight rounded w-3/4"></div>
        <div className="h-4 bg-primaryLight rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
