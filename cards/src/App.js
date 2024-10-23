import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";

function App() {
  return (
    <div className="card-container">
      <CardWrapper>
        <CardImg></CardImg>
        <CardInfo></CardInfo>
      </CardWrapper>
    </div>
  );
}

export default App;
