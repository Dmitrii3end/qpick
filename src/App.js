import './App.css';
import Header from './components/Header/Header';
import Shop from './pages/Shop/Shop';
import Basket from './pages/Basket/Basket';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Basket></Basket>
      <Footer></Footer>
    </div>
  );
}

export default App;