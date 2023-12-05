import { RouteObject } from 'react-router';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Grid from '../pages/product/Grid';
import App from '../App';
import Emotion from '../pages/emotion/Emotion';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'grid',
        element: <Grid />
      },
      {
        path: 'emotion',
        element: <Emotion />
      }
    ]
  }
];
export default routes;
