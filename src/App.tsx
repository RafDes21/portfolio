import "./app.css";
import { About, Footer } from "./components";
import Home from "./ui/home";

const App = () => {
  return (
    <div>
      <About/>
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
