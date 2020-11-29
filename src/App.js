import { useState } from 'react';
import './App.css';

const App = () => {

  const [opened, setOpened] = useState(false)

  const handleClickOpen = () => {
    setOpened(!opened)
  }
  
  const sidenavState = opened ? "openNavSidenav" : "closeNavSidenav";
  const mainState = opened ? "openNavMain" : "closeNavMain";


  return (
    <div className="App">
      <div id="mySidenav" className={`sidenav ${sidenavState}`}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main" className={mainState}>
        <h2>Sidenav Push Example</h2>
        <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={handleClickOpen}>&#9776; open</span>
      </div>

    </div>
  );
}

export default App;
