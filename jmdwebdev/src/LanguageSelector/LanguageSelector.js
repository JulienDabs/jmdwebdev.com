import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import MainPageFr from '../FR/Main/Main';
import AboutFr from "../FR/About/About"
import logo from '../img/JMD Web Dev.png'; 
import '../LanguageSelector/LanguageSelector.css'

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      darkMode: false,
    };
    this.handleLanguageSelection = this.handleLanguageSelection.bind(this);
    this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this);
  }

  componentDidMount() {
    const language = localStorage.getItem('language');
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (language !== null) {
      this.setState({ language: language });
      this.setState({darkMode: isDarkMode});
    }
  }

  handleLanguageSelection(event) {
    const language = event.target.value;
    localStorage.setItem('language', language);
    this.setState({ language: language });
  }

  handleDarkModeToggle() {
    const { darkMode } = this.state;
    localStorage.setItem('darkMode', !darkMode);
    this.setState ({darkMode: !darkMode});
  }

  render() {
    const { language, darkMode } = this.state;

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
      
      <div className={darkMode ? 'dark' : 'light'}>
       <button className='' onClick={this.handleDarkModeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <AboutFr />
        
      </div>
      
    );
  }
}

export default LanguageSelector;
