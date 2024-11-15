import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Router';
import NotFound from './pages/NotFound.tsx';

const auth: boolean = true;
const routes = auth ? [...publicRoutes, ...privateRoutes] : publicRoutes;

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    errorElement: <NotFound />,
  }))
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
