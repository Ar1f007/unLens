import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const Service = ({ service: { category, img, services, price } }) => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={category} className="rounded-xl h-36" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase tracking-widest text-secondary">{category}</h2>

        <ul className="self-start">
          {services.map((service) => (
            <p className="flex items-center gap-x-3 lowercase">
              <IoMdCheckmarkCircleOutline fill="#3ABFF8" />
              {service}
            </p>
          ))}
        </ul>

        <button class="btn mt-5 gap-2">
          Price :<div class="badge badge-secondary badge-lg">${price}</div>
        </button>

        <div className="card-actions">
          <button className="btn btn-primary btn-wide tracking-wide mt-5">Get it</button>
        </div>
      </div>
    </div>
  );
};
