import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import freelancer1 from "./assets/img/freelancer1.jpg";

function App() {
  const freelancer = {
    id: 0,
    title: "MR",
    lastName: "ROBERT",
    role: "UI/UX Designer",
    fee: 85,
    reviews: 105,
  };

  return (
    <div className="card-container">
      <CardWrapper>
        <div className="img-container">
          <div className="img-wrapper">
            <img src={freelancer1} alt="freelancer-one" />
            <span className="dot"></span>
          </div>
        </div>
        <div className="info-container">
          <h3>
            {freelancer.title} {freelancer.lastName}
          </h3>
          <p>{freelancer.role}</p>
        </div>
        <div className="hire">
          <div>
            Rate: <span className="price">${freelancer.fee}/hr</span>
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
          <div>({freelancer.reviews} Reviews)</div>
        </div>
        <div className="icons">
          <div className="verified">
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>Verified</span>
          </div>
          <span className="circle available">
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
          <span className="circle available">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="circle not-available">
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
          <span className="circle not-available">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </span>
        </div>
      </CardWrapper>
    </div>
  );
}

export default App;
