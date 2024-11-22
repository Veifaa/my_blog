import { FC } from 'react';
import  Header  from '../components/Header';

const NotFound: FC = () => {
  return  <div className="">
    <Header></Header>
  <div className="text-center">
    <h1 className="text-6xl font-bold text-purple-500">404</h1>
    <p className="mt-4 text-lg text-gray-300">
      Oops! The page you're looking for doesn't exist.
    </p>
    <p className="mt-1 text-gray-500">It might have been moved or deleted.</p>
    <div className="mt-6">
      <a
        href="/"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow-lg transition duration-300"
      >
        Go Back Home
      </a>
    </div>
    <div className="mt-10">
      <img
        src="your-404-image-url.png"
        alt="404 Illustration"
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />
    </div>
  </div>
</div>
};

export default NotFound;
