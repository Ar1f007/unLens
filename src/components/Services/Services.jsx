import { Service } from '../Services/Service';
import { useId } from 'react';
import { serviceList } from '../../assets/data/services';

export const Services = () => {
  const id = useId();

  return (
    <div className="bg-zinc-300 py-20 md:py-24 px-10">
      <div id="services" className="container mx-auto">
        <h2 className="text-primary-content font-medium uppercase text-4xl text-center tracking-widest ">
          Services
        </h2>

        <section className="py-12 md:py-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center content-center gap-10 ">
          {serviceList.map((service) => (
            <Service key={`${id}-${service.category}`} service={service} />
          ))}
        </section>
      </div>
    </div>
  );
};
