import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse  lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-3/4 rounded-lg border-white border-8 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold w-2/3">
            we are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are Many Variations os passages of lorem ipsum available, But
            the Majority have suffered alteration in some from, By injected
            Humour, or randomized words which don't look even slighty
            believable.
          </p>
          <p className="py-6">
            There are Many Variations os passages of lorem ipsum available, But
            the Majority have suffered alteration in some from, By injected
            Humour, or randomized words which don't look even slighty
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
