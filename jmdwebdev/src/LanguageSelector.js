import React, { Component } from 'react';
import MainPage from './FR/Main/Main';

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
      return (
        <div>
          <button value="fr" onClick={this.handleLanguageSelection}>Français</button>
          <button value="en" onClick={this.handleLanguageSelection}>English</button>
        </div>
      );
    }

    return (
      <div className={darkMode ? 'dark' : 'light'}>
        <button onClick={this.handleDarkModeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>

        {language === 'fr' ? <MainPage /> : <h1>english</h1>}
      </div>
    );
  }
}

export default LanguageSelector;
