import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <AboutUs />

        <Link to="/products">
          <button className="start-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;