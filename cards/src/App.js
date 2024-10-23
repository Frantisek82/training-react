import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";
import { freelancers } from "./db/freelancers";

function App() {
  console.log(freelancers);

  return (
    <div className="card-container">
      <CardWrapper>
        <CardImg freelancer={freelancers[0]}></CardImg>
        <CardInfo freelancer={freelancers[0]}></CardInfo>
      </CardWrapper>
    </div>
  );
}

export default App;
