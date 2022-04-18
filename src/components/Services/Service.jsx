import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useId } from 'react';
import { Link } from 'react-router-dom';

export const Service = ({ service: { category, img, services, price, id: serviceId } }) => {
  const id = useId();
  return (
    <div className="card bg-base-100 shadow-2xl lg:w-96">
      <figure className="px-10 pt-10">
        <img src={img} alt={category} className="rounded-xl h-36" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase tracking-widest text-secondary">{category}</h2>

        <ul className="self-center ">
          {services.map((service, i) => (
            <p className="flex items-center gap-x-3 lowercase mt-2" key={`${id}-${i}`}>
              <IoMdCheckmarkCircleOutline fill="#3ABFF8" />
              {service}
            </p>
          ))}
        </ul>

        <button className="btn mt-5 gap-2">
          Price :<div className="badge badge-secondary badge-lg">${price}</div>
        </button>

        <div className="card-actions">
          <Link to={`/checkout/${serviceId}`} className="btn btn-wide tracking-wide mt-5">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};
