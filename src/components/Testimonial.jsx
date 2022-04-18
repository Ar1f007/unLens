import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Component } from 'react';
import { testimonials } from '../assets/data/testimonial';
import Slider from 'react-slick';

export class Testimonial extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="flex flex-col items-center py-20 px-8">
        <h2 className="text-3xl lg:text-5xl mt-3 mb-14 text-center">
          What My Clients Say About Me?
        </h2>
        <div className="w-full lg:w-4/12 ">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card bg-base-100 shadow-xl border-2 border-gray-600"
              >
                <div className="avatar flex justify-center pt-10">
                  <div className="w-24 rounded-full">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
