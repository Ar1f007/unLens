export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(https://tinyurl.com/56pb7v9v)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Behind every picture… there is a story …to tell! <br /> Life is beautiful, let me
            capture yours.
          </p>

          <a href="#services" className="btn btn-primary">
            Frame your shot
          </a>
        </div>
      </div>
    </div>
  );
};
