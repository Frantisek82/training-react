import "./CardImg.css";

function CardImg() {
  return (
    <div className="img-container">
      <div className="img-wrapper">
        <img src={freelancer1} alt="freelancer-one" />
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default CardImg;
