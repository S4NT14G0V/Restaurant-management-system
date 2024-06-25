import "./css/styles.css"
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';

function Home() {
  return (
    <div className="main-container">
      <Navbar/>
      <Menu/>
      <Footer/>
    </div>
    
  );
}

export default Home;