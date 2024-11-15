import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { USER_ROUTE, BLOG_ROUTE, HOME_PAGE } from './utils/ConstRouter';
export const publicRoutes = [
  {
    Component: BlogPage,
    path: BLOG_ROUTE,
  },
  {
    Component: UserPage,
    path: USER_ROUTE,
  },
  {
    Component: HomePage,
    path: HOME_PAGE,
  },
];

export const privateRoutes = [];
