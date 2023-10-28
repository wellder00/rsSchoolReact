import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../views/Home';
import { ErrorPage } from '../components/ErrorPage';
import { CardInfo } from '../components/CardInfo';
import { loader as rootLoader } from '../components/CardInfo/CardInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about_character/:characterId',
        element: <CardInfo />,
        loader: rootLoader,
      },
    ],
  },
]);
