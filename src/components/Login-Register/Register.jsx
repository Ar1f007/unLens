import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../../config/firebase.config';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { splitErrorText } from '../../utils/splitErrorText';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Loading } from '../Loading';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const [signInWithGithub, githubSignUpUser, githubSignUpLoading, githubSignUpError] =
    useSignInWithGithub(auth);

  const [signInWithGoogle, googleSignUpUser, googleSignUpLoading, googleSignUpError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user || githubSignUpUser || googleSignUpUser) {
      toast('Registration successful');
      navigate(from, { replace: true });
    }
  }, [user, githubSignUpUser, googleSignUpUser]); // eslint-disable-line

  if (githubSignUpLoading || googleSignUpLoading) {
    return <Loading />;
  }

  return (
    <div className="hero min-h-screen bg-base-200 pt-20 lg:pt-0">
      <div className="hero-content flex-col w-full lg:w-8/12">
        <h1 className="text-3xl lg:text-4xl font-bold">Register here!</h1>
        {error && (
          <p className="text-red-400" id="firebase-error">
            {splitErrorText(error.message)}
          </p>
        )}

        {githubSignUpError && (
          <p className="text-red-400" id="firebase-error">
            {splitErrorText(githubSignUpError.message)}
          </p>
        )}

        {googleSignUpError && (
          <p className="text-red-400" id="firebase-error">
            {splitErrorText(googleSignUpError.message)}
          </p>
        )}

        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account? Log in
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                {loading ? (
                  <button type="submit" className="btn btn-primary">
                    <svg
                      role="status"
                      className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                )}
              </div>
            </form>
            <div className="divider">OR</div>

            <button
              type="button"
              className="flex justify-center mx-auto items-center w-full h-20 rounded px-10 bg-neutral cursor-pointer hover:bg-neutral-focus transition duration-150 ease-out hover:ease-in"
              onClick={() => signInWithGithub()}
            >
              <BsGithub className="w-5 h-5 mr-3" />
              <span className="lg:uppercase">Register with Github</span>
            </button>

            <button
              type="button"
              className="mt-3 flex justify-center mx-auto items-center w-full h-20 rounded px-10 bg-neutral cursor-pointer hover:bg-neutral-focus transition duration-150 ease-out hover:ease-in"
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle className="w-5 h-5 mr-3" />
              <span className="lg:uppercase">Register with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
