import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import { USER_ROUTE, BLOG_ROUTE, LOGIN_ROUTE } from './utils/ConstRouter';
export const publicRoutes = [
  {
    Component: BlogPage,
    path: BLOG_ROUTE,
  },
];

export const privateRoutes = [
  {
    Component: UserPage,
    path: USER_ROUTE,
  },
];
