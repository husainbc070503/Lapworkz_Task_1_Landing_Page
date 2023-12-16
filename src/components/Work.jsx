import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const Heading = "How It Works";
  const Text =
    "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.";
  const text =
    "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum.";

  const workData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text,
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text,
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text,
    },
  ];

  return (
    <div className="work-section-container">
      <div
        className="work-section-top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="primary-subheading">Work</h1>
        <h1 className="primary-heading">{Heading}</h1>
        <p className="primary-text">{Text}</p>
      </div>
      <div
        className="work-section-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {workData.map((item) => {
          const { image, title, text } = item;
          return (
            <div className="work-section-info" key={title}>
              <div className="work-image">
                <img src={image} alt={title} />
              </div>
              <div className="work-info-content">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
