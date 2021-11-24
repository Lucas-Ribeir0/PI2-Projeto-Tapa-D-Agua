import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Rotas from './routes/routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <div className="Body">
          <Rotas/>
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
