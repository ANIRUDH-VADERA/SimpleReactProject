import './App.css';
import Navbar from "./Components/Navbar/Navbar.js"
import Footer from "./Components/Footer/Footer.js"
import FirstPage from "./Pages/FirstPage/FirstPage.js"
import SecondPage from "./Pages/SecondPage/SecondPage.js"


function App() {
  return (
    <div className="App"> 
      <Navbar />
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
