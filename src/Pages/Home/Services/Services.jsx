import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-chi-nine.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center mt-20">
        <h3 className="text-3xl text-orange-500 font-bold mb-2">
          Our Services
        </h3>
        <h2 className="text-5xl font-bold mb-4">Our Services Area</h2>
        <p className="py-6 lg:w-1/2 lg:mx-auto mx-3">
          There are Many Variations os passages of lorem ipsum available, But
          the Majority have suffered alteration in some from, By injected
          Humour, or randomized words which dont look even slighty believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
