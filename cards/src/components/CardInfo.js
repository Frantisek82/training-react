import "./CardInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function CardInfo() {
  const freelancer = {
    id: 0,
    title: "MR",
    lastName: "ROBERT",
    role: "UI/UX Designer",
    fee: 85,
    reviews: 105,
  };

  return (
    <div className="info-container">
      <h3>
        {freelancer.title} {freelancer.lastName}
      </h3>
      <p>{freelancer.role}</p>
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
    </div>
  );
}

export default CardInfo;
