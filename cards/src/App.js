import "./App.css";
import CardsContainer from "./components/CardsContainer";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";
import { freelancers } from "./db/freelancers";

function App() {
  console.log(freelancers);

  return (
    <CardsContainer>
      {freelancers.map((freelancer, index) => {
        return (
          <CardWrapper key={index}>
            <CardImg freelancer={freelancers[index]}></CardImg>
            <CardInfo freelancer={freelancers[index]}></CardInfo>
          </CardWrapper>
        );
      })}
    </CardsContainer>
  );
}

export default App;
