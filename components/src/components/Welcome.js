import "./Welcome.css";
import NewDate from "./NewDate";

function Welcome(props) {
  const today = new Date(Date.now()).toLocaleDateString();

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <NewDate today={today}></NewDate>
    </div>
  );
}

export default Welcome;
