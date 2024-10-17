import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import CardWrapper from "./components/CardWrapper";
import freelancer1 from "/var/www/Node/training-react/cards/src/assets/img/freelancer1.jpg";

function App() {
  return (
    <CardWrapper>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={freelancer1} alt="freelancer-one" />
        </div>
      </div>
      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-circle-check" /> */}
    </CardWrapper>
  );
}

export default App;
