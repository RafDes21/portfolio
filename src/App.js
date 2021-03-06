import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import AboutComp from './components/about/AboutComp';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ProyectsComp } from './components/proyects/ProyectsComp';
import Tools from './components/useTools/Tools';
import Footer from './components/footer/Footer';
import { Contact } from './components/contact/Contact';
import ParticlesBack from './ParticlesBack';

function App() {
  return (
    <div className="App" style={{background:"linear-gradient(to left, #0f2027, #203a43, #2c5364)", height:"100%"}}>
      
     {/* <ParticlesBack/>  */}
     <NavbarComp/>
     <AboutComp />
     <ProyectsComp/>
     <Tools />
     <Contact/>
     <Footer/>
    </div>
  );
}
export default App;



  
  

     
      
      
      
/* <ParticleComp/>
<NavbarComp/>
<BrowserRouter>
  <Routes>
    <Route  path="/"  element={<AboutComp/>}/>
    <Route  path="/"  element={<ProyectsComp/>}/>
    <Route  path="/"  element={<Tools/>}/>
    <Route  path="/"  element={<Contact/>}/>
  </Routes>
</BrowserRouter>
<Footer/>
      */
     





  
