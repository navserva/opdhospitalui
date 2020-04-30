import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import {translator} from './Components/Translator';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Page1 from "./Pages/page1";

class App extends React.Component {
  constructor(props) {
    super(props)
    // sessionStorage.setItem('language','en')
    if (window.performance) {
      if (performance.navigation.type === 1) {
        translator.setLanguage(sessionStorage.getItem('language'))
      }
    }
  }
  changelang = (lang) => {
    // translator.setLanguage(lang)
    window.sessionStorage.setItem('language',lang)
    window.location.reload()
    } 
  render() {
    return (
      <div class="container"> 
        <ButtonGroup className='lang-btn' size="lg">
            <Button variant="light" onClick={() => this.changelang('th')}>TH</Button>
            <Button variant="dark" onClick={() => this.changelang('en')}>EN</Button>
        </ButtonGroup>
        <Link to="/Pages/hospital-info"> <Button className='big-btn' variant='success'>{translator.btn_1}</Button> </Link> 
        <Link to="/Pages/opd-map"> <Button className='big-btn' variant='success'>{translator.btn_2}</Button> </Link>
        <Link to="/Pages/news"> <Button className='big-btn' variant='success'>{translator.btn_3}</Button> </Link>
        <Link to="/Pages/frequency-asking"> <Button className='big-btn' variant='success'>{translator.btn_4}</Button> </Link>
      </div>
      )
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

 {/* <Button className='big-btn' variant='success'>{translator.btn_1}</Button>
        <Button className='big-btn' variant='info'>{translator.btn_2}</Button>
        <Button className='big-btn' variant='danger'>{translator.btn_3}</Button>
        <Button className='big-btn' variant='warning'>{translator.btn_4}</Button> */}
        {/* <Route path="/Pages/hospital-info" component={Page1} /> */}