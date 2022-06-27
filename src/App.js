import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Containers/section1";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
