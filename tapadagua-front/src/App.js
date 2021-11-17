import './App.css';
import Footer from './components/footer';
import FormLog from './components/forms';
import Header from './components/header';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="body">
        <FormLog/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
