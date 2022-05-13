import db from "../../data/db.json";
import "./Tours.css";

const Tours = () => {
  return (
    <div className="con-tours">
      {db.map((data) => (
        <div className="img-container">
          <img className="img" src={data.image} alt="sight seeing" />
          {data.name}
        </div>
      ))}
    </div>
  );
};

export default Tours;
