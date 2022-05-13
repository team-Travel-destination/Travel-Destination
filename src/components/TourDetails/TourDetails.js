import "./TourDetails.css";
import { useParams } from "react-router-dom";
import db from "../../data/db.json";
import { useState } from "react";
function TourDetails(props) {
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  const { id: requestedId } = useParams();
  const neededTour = db.find((obj) => obj.id == requestedId);
  if (!neededTour) return "Error 404";
  return (
    <div className="tour-details">
      <div className="name-price">
        <h1 className="city-name">{neededTour.name}</h1>
        <p className="price">{neededTour.price}$</p>
      </div>
      <div className="sight-img">
        <img src={neededTour.image} alt="sight seeing" />
      </div>
      <div className="stuff">
        <div className={show ? "text show-more" : "text not-show-more"}>
          {neededTour.info}
        </div>
        <div className="onclick" onClick={toggle}>
          {show ? <p>Show More</p> : <p>Show Less</p>}
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
