import "./App.css";
import NewComponent from "./components/NewComponent";

function App() {
  return (
    <div className="App">
      <NewComponent
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <NewComponent
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
