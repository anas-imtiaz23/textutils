import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
import { useState } from 'react';

function App(props) {
  // const [mode,setmodee]=useState('green')
  const tooglemodee=()=>{
    if(mode==='light'){
      setmode('green')
      document.body.style.background='green'
      showalert('Green mode has been enabled successfully','success')
    }
    else{
      setmode('light')
      document.body.style.background='white'
      showalert('White mode has been enabled successfully','success')
    }
  }
  const [alert,setalert]= useState(null)
  const showalert=(message,type)=>{
   setalert({
    message:message,
    type:type

   })
   setTimeout(()=>{
    setalert(null);
   }, 3000);
  }
 const [mode,setmode]= useState('dark')
 const tooglemode=()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.background='grey';
    showalert('dark mode has been enabled','success')
  }
  else{
    setmode('light')
    document.body.style.background='white';
    showalert('light mode has been enabled','success')
  }
 }
  return (
    <>
    {/* <Router> */}
          <Navbar title="Textutills" abouttext="About Text"  tooglemodee={tooglemodee} tooglemode={tooglemode}  mode={mode} />
        
          <div className='container' >
      </div>  
      {/* <Routes> */}
  {/* <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode}/>} />
  <Route path="/about" element={<About />} />  */}
  {/* <Route path="/contact" element={<Contact />} /> */}
{/* </Routes> */}
      <TextForm heading="Enter your text to analyze" mode={mode}/>
      <Alert alert={alert}/>
      {/* <About/>  */}
      {/* </Router> */}
      </>
      
    
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,

}
// Navbar.defaultProps={
//   title: 'set title here',
//   abouttext:'set about here'
// }
export default App;
