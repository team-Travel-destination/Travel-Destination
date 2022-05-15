import "./Home.css";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../../data/db.json"
function Home(props) {
  return (
    <>
      <Tours tours={data} />
      <Footer />
    </>
  );
}

export default Home;
