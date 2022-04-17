import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:w-8/12">
        <h1 className="text-5xl font-bold">Login now!</h1>

        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account? Create one
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
