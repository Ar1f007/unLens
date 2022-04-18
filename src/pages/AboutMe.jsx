import profile from '../assets/images/profile.jpg';

export const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={profile} className="max-w-sm w-full rounded-lg shadow-2xl" alt="profile" />
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Hi there!</h1>
          <p className="py-3">
            My name is Arif. I am doing my Bachelors in technology from Sylhet Metropolitan
            university and my specialisation is in Computer Science and Engineering.
          </p>
          <p className="py-3">
            I have a deep interest in Development and I have made number of projects using HTML,
            CSS, JS, and React.
          </p>
          <p className="py-3">
            I've always been fascinated by computers, so I started developing. As a developer I want
            to be able to create web sites that can effectively display information, provide
            interactivity, and are visually appealing.
          </p>
          <p className="py-3">
            In order to achieve that I want to keep focusing on gradual improvement, stay
            determined, take one step at a time. And in doing so, one day Inshaallah I shall achieve
            my goal.
          </p>
        </div>
      </div>
    </div>
  );
};
