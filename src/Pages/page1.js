import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import {translator} from '../Components/Translator';

class Text extends React.Component {
// constructor(props) {
//     super(props)
//     // sessionStorage.setItem('language','en')
//     if (window.performance) {
//       if (performance.navigation.type === 1) {
//         translator.setLanguage(sessionStorage.getItem('language'))
//       }
//     }
//   }
//   changelang = (lang) => {
//     // translator.setLanguage(lang)
//     window.sessionStorage.setItem('language',lang)
//     window.location.reload()
//     } 

render () {
    return (
      <div>
        {/* <ButtonGroup className='lang-btn' size="lg">
            <Button variant="light" onClick={() => this.changelang('th')}>TH</Button>
            <Button variant="dark" onClick={() => this.changelang('en')}>EN</Button>
        </ButtonGroup> */}
        
          <h1>Hello World</h1>
      </div>
    )
}
}
export default Text; 