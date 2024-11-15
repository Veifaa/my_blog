import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { USER_ROUTE, BLOG_ROUTE, HOME_PAGE, LOGIN_ROUTE, REGISTER_ROUTE } from './utils/ConstRouter';
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
  {
    Component: LoginPage,
    path: LOGIN_ROUTE,
  },
  {
    Component: RegisterPage,
    path: REGISTER_ROUTE,
  },
];


export const privateRoutes = [];
