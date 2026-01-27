import ServicesCard from "../components/ServicesCard";
import "../index.css";

function Services() {

  return (
    <>
      <div className="top-heading">
        <h1 >Our Services</h1>
        <p>        Professional Web Solutions for Your Online Success
        </p>
      </div>
      <div className="services">

        <ServicesCard />
      </div></>
  );
}

export default Services;
