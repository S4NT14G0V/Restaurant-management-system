import logo from './logo.svg';
import './App.css';
import "./css/normalize.css"
import "./css/styles.css"
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Menu from './componentes/menu';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
