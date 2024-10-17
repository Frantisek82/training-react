import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import CardWrapper from "./components/CardWrapper";
import freelancer1 from "/var/www/Node/training-react/cards/src/assets/img/freelancer1.jpg";

function App() {
  return (
    <CardWrapper>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={freelancer1} alt="freelancer-one" />
          <span className="dot"></span>
        </div>
      </div>
      <div className="info-container">
        <h3>MR ROBERT</h3>
        <p>UI/UX Designer</p>
      </div>
      <div className="hire">
        <div>
          Rate: <span>$85/hr</span>
        </div>
        <button className="hire-button">Hire Me</button>
      </div>
      <div className="rating">
        <div>5.0</div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>105 Reviews</div>
      </div>
      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-circle-check" /> */}
    </CardWrapper>
  );
}

export default App;
