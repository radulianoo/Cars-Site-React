import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="Rent-a-Car 🇷🇴"/>
      <div className='app-row'>
        <Sidebar/>
        <MainContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
