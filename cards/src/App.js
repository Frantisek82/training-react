import "./App.css";
import CardInfo from "./components/CardInfo";
import CardImg from "./components/CardImg";
import CardWrapper from "./components/CardWrapper";

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
