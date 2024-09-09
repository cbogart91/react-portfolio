import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
// import Error from './pages/Error';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
// import Projects from './pages/Projects';
// import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      // {
      //   path: '/Projects',
      //   element: <Projects />,
      // },
      // {
      //   path: '/contacts',
      //   element: <Contacts />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
