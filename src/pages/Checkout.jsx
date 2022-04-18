import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { serviceList } from '../assets/data/services';

export const Checkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const { category } = serviceList.find((service) => service.id === +id);
    setSelectedCategory(category);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Thank you. You will be contacted soon');
    navigate('/');
  };

  return (
    <section className="py-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full lg:w-8/12">
          <h1 className="text-3xl lg:text-4xl font-bold">Book Here!</h1>

          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <p className="text-2xl">Package : {selectedCategory}</p>
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
                    value={name}
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
                    value={email}
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
                    value={address}
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
