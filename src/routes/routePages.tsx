import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../views/Home';
import { NotFound } from '../views/NotFound';
import { ErrorPage } from '../components/ErrorPage';
import Routes from '../utils/constants/routes';
import Layout from '@components/Layout/Layout';
import { ControlledForm } from '../views/ControlledForm';
import { UnControlledForm } from '../views/UnControlledForm';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.LAYOUT,
        element: <Home />,
      },
      {
        path: Routes.CONTROLLED,
        element: <ControlledForm />,
      },
      {
        path: Routes.UNCONTROLLED,
        element: <UnControlledForm />,
      },
      {
        path: Routes.NOTFOUND,
        element: <NotFound />,
      },
    ],
  },
]);
