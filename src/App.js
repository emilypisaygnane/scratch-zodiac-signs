import './App.css';
import { zodiac } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Main zodiacs={ zodiac }/>
    </div>
  );
}

export default App;