import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const today = new Date(Date.now()).toLocaleDateString();
  const veryWelcome = (today) => {
    console.log(today);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    div.appendChild(h1);
    let prap = {
      userName: "John",
      todayDate: today,
    };
  };

  return (
    <div className="main">
      <Welcome name="Laura" today={today}></Welcome>
      <Welcome name="Jane" today={today}></Welcome>
      <Welcome name="World" today={today}></Welcome>
    </div>
  );
}

export default App;
