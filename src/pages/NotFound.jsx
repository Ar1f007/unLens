import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { pagenotfound } from '../assets';

export const NotFound = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={pagenotfound} alt="404" />

          <p className="text-3xl text-secondary mt-10">Page not found!</p>
          <Link to="/" className="btn btn-secondary mt-10">
            <FaHome className="mr-2 text-lg" /> Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
