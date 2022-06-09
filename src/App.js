import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import AboutComp from './components/about/AboutComp';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ProyectsComp } from './components/proyects/ProyectsComp';
import Tools from './components/useTools/Tools';
import Footer from './components/footer/Footer';
import { Contact } from './components/contact/Contact';


function App() {
  return (
    <div className="App">
     <NavbarComp/>
     <AboutComp/>
     <ProyectsComp/>
     <Tools/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

