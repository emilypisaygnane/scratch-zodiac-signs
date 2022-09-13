import './App.css';
import { zodiac } from './data';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header name='Emily Pisaygnane' />
      <Footer year='2022' />
      <Main zodiacs={ zodiac }/>
    </div>
  );
}

export default App;