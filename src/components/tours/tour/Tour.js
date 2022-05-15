import "./Tour.css";
// import data from "../../../data/db.json";


function Tour({ tour }) {
  return (
    < div className="img-container" >
      <img className="img" src={tour.image} alt="sight seeing" />
      <h2>{tour.name}</h2>
    </div>);
}
export default Tour;
