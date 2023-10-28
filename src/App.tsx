import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routePages';

import './index.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
