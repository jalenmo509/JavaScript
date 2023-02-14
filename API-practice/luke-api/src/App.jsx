import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import People from "./components/People";
import Planet from "./components/Planet";
function App() {
  return (
    <BrowserRouter>
      <h1>Luke API Walker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
