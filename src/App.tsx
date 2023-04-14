import "./app.css";
import { Footer } from "./components";
import Home from "./home";

const App = () => {
  return (
    <div>
      <div className="app">
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
