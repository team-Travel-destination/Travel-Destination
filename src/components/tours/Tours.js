import { Link } from "react-router-dom";
import db from "../../data/db.json";
import "./Tours.css";

const Tours = () => {
  return (
    <div className="con-tours">
      {db.map((data) => (
        <Link to={`/city/${data.id}`}>
          <div className="img-container">
            <img className="img" src={data.image} alt="sight seeing" />
            {data.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tours;
