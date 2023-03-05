import services from "../data/services.json";

const Services = ({ services }: any) => {
  // const getData = async () => {
  //   const response = await fetch("../data/services.json");
  //   const data = await response.json();
  //   return data;
  // };

  // const servicesData = await getData();

  console.log(services);

  return (
    <section className="section" id="Services">
      <div className="container__header">
        <h2>Services</h2>
      </div>

      <div className="services__container">
        {/* {servicesData.map((service: any, index: any) => (
          <div key={index} className="service__card">
            <div className="service__icon">
              <img src="" alt={service.title} width={26} height={26} />
            </div>
            <div className="service__desc">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Services;
