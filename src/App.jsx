
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Menu from "./component/Menu";
import AboutUs from "./component/AboutUs";
import Testmoinals from "./component/Testmoinals";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <AboutUs />
      <Testmoinals />
      <Contact />
      {/* <Footer/> */}
      <Router>
        <div className="App">
          {/* Other components */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
