import { ErrorPage } from '@/components/ErrorPage';
import React from 'react';

const Error404 = () => {
  console.error('Everything is broken, everything is destroyed');
  return (
    <div>
      <ErrorPage />
    </div>
  );
};

export default Error404;
