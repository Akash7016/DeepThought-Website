import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TopText from './components/TopText';
import HeroSection from './components/HeroSection';
import LeftSection from './components/SideSection/LeftSection';
import BottomButton from './components/BottomButton';
import data from "./Json File/Data.json";

function App() {
  return (
    <div className="App">
      <Header/>
      <TopText/>
      <HeroSection/>
      <BottomButton/>
      
    </div>
  );
}

export default App;
