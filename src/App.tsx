import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routePages';
import './index.scss';

const App = () => <RouterProvider router={router} />;

export default App;
