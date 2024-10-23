import "./CardImg.css";
import image from "../assets/img/freelancer1.jpg";

function CardImg() {
  return (
    <div className="img-container">
      <div className="img-wrapper">
        <img src={image} alt="freelancer-one" />
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default CardImg;
