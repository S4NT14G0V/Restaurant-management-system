import './App.css';
import "./componentes/css/styles.css"
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Menu from './componentes/menu';
function App() {
  return (
    <body className="App">
      <Navbar/>
      <Menu/>
      <Footer/>
    </body>
    
  );
}

export default App;
