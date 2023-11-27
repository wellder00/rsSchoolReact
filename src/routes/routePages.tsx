import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../views/Home';
import { NotFound } from '../views/NotFound';
import { ErrorPage } from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/notfound',
        element: <NotFound />,
      },
    ],
  },
]);
