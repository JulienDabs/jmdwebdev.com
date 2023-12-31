import React, { Component } from 'react';
import MainPageFr from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutFr from "../About/About";
import ContactForm from '../Contact/ContactForm';
import logo from '../../img/JMD Web Dev.png'; 
import './LanguageSelector.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      //darkMode: false,
    };
    this.handleLanguageSelection = this.handleLanguageSelection.bind(this);
    // this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this);
  }

  componentDidMount() {
    const language = localStorage.getItem('language');
    //const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (language !== null) {
      this.setState({ language: language });
     // this.setState({darkMode: isDarkMode});
    }
  }

  handleLanguageSelection(event) {
    const language = event.target.value;
    localStorage.setItem('language', language);
    this.setState({ language: language });
  }

  // handleDarkModeToggle() {
  //   const { darkMode } = this.state;
  //   localStorage.setItem('darkMode', !darkMode);
  //   this.setState ({darkMode: !darkMode});
  // }

  render() {
    const { language } = this.state;

    if (language === null) {
      return ( <>
      <div className='main-page'>
        <img src={logo} className='main-page--logo animate__animated animate__zoomIn' alt='JMD Web developper'/>
          <div className='main-page--buttons animate__animated animate__zoomIn'>
            <button className='main-page--personalized-button' value="fr" onClick={this.handleLanguageSelection}>Français</button>
            <button className='main-page--personalized-button' value="en" onClick={this.handleLanguageSelection}>English</button>
          </div>
      </div>
       
        </>
      );
    }

    return (
      
       <div >
        <Navbar /> 
        <Main/>             
        <Footer />
      </div>
      
    );
  }
}

const Main = () => {

  return (
      <Routes>
       <Route exact path='/' element={<MainPageFr/>}></Route>
      <Route exact path='/About' element={<AboutFr/>}></Route>
      <Route exact path='/Contact' element={<ContactForm/>}></Route>
      
      </Routes>
  )
}

export default LanguageSelector;
