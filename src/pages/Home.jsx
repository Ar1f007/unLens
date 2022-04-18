import { Hero, Services } from '../components';
import { Testimonial } from '../components/Testimonial';

export const Home = () => {
  return (
    <section className="py-5">
      <Hero />
      <Services />
      <Testimonial />
    </section>
  );
};
