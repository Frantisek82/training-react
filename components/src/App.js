import "./App.css";
import Welcome from "./components/Welcome";
import Main from "./Main";

function App() {
  const today = new Date(Date.now()).toLocaleDateString();

  // Another way to create the same thing
  // const veryWelcome = (today) => {
  //   console.log(today);
  //   let div = document.createElement("div");
  //   let h1 = document.createElement("h1");
  //   div.appendChild(h1);
  //   let prap = {
  //     userName: "John",
  //     todayDate: today,
  //   };
  // };

  return (
    <Main>
      <Welcome userName="Laura" today={today}></Welcome>
      <Welcome userName="Jane" today={today}></Welcome>
      <Welcome userName="World" today={today}></Welcome>
    </Main>
  );
}

export default App;
