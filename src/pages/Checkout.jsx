import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../config/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loading } from '../components/Loading';

export const Checkout = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Thank you. You will be contacted soon');
    navigate('/');
  };

  return (
    <section className="py-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full lg:w-8/12">
          <h1 className="text-3xl lg:text-5xl font-bold">Book Here!</h1>

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
                    required
                    onChange={(e) => setName(e.target.value)}
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
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>

                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-control mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
