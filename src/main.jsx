import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
  Router,
 } from 'react-router-dom';


import Landingpage from './pages/Landingpage.jsx';
import ErrorPage from './ErrorPage.jsx';
import AboutPage from './pages/About.jsx';
import './assets/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />,
    errorElement: <ErrorPage />
  },
  /* {
    path: 'home',
    element: <Homepage />,
    errorElement: <ErrorPage />
  }, */
  {
    path: 'about',
    element: <AboutPage />,
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <createBrowserRouter className="overflow-y-hidden">
    <RouterProvider router={router} />
  </createBrowserRouter>,
)
