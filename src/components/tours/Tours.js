import { Link } from "react-router-dom";
import db from "../../data/db.json";
import "./Tours.css";
import Tour from "./tour/Tour";

const Tours = () => {
  return (
    <div className="con-tours">
      {
        db.map((data) => (
          <Link to={`/city/${data.id}`}>
            <Tour tour={data} />
          </Link>
        ))
      }
    </div>
  );
};

export default Tours;
