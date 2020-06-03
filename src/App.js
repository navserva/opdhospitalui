import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import {translator} from './Components/Translator';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Page1 from "./Pages/page1";
import FAQs_Eng from "./sounds/FAQs.mp3";
import News_Eng from "./sounds/News.mp3";
import Maps_Eng from "./sounds/OPD Map.mp3";
import HosInfo_Eng from "./sounds/Hospital Information.mp3";
import FAQs_Th from "./sounds/คำถามที่พบบ่อย.mp3";
import News_Th from "./sounds/ข่าวสาร.mp3";
import Maps_Th from "./sounds/แผนผังแผนกผู้ป่วยนอก.mp3";
import HosInfo_Th from "./sounds/ข้อมูลเกี่ยวกับโรงพยาบาล.mp3";
import {Howl, Howler} from "howler";

const soundclip = [
  {sound:HosInfo_Eng},
  {sound:Maps_Eng},
  {sound:News_Eng},
  {sound:FAQs_Eng,},
  {sound:HosInfo_Th},
  {sound:Maps_Th}, 
  {sound:News_Th},
  {sound:FAQs_Th}, 
  
]

class App extends React.Component {
  // Change Language Section 
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
    
  //PlaySound Section 
  soundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }
  RenderButtonAndSound = () => {
    return soundclip.map((soundObj, index)=> {
      return(
        <Button key={index} onClick={() => this.soundPlay(soundObj.sound)} className='big-btn' variant='success'>
          {soundObj.label}
        </Button>
      )
    }) 
  }


  render() {
    Howler.volume(0.5)
    return (
      <div class="container"> 
        <ButtonGroup className='lang-btn' size="lg">
            <Button variant="light" onClick={() => this.changelang('th')}>ไทย</Button>
            <Button variant="dark" onClick={() => this.changelang('en')}>EN</Button>
        </ButtonGroup>
        <Link to="/Pages/hospital-info"> <Button className='big-btn' variant='success'>{translator.btn_1}</Button> </Link> 
        <Link to="/Pages/opd-map"> <Button className='big-btn' variant='info'>{translator.btn_2}</Button> </Link>
        <Link to="/Pages/news"> <Button className='big-btn' variant='danger'>{translator.btn_3}</Button> </Link>
        <Link to="/Pages/frequency-asking"> <Button className='big-btn' variant='warning'>{translator.btn_4}</Button> </Link>
        {/* <Button className='big-btn' variant='dark'>Play Audio</Button> */}
        {this.RenderButtonAndSound()}
      </div>
      )
  }
}
export default App;

