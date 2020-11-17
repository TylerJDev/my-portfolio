import { Link } from "gatsby"
import React, { Component } from 'react';
import headerStyles from "./header.module.scss"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false
    }
  }

  componentDidMount() {
    const preferDarkLight = getComputedStyle(document.querySelector('#prefer')).getPropertyValue('content');

    if (preferDarkLight.length && preferDarkLight === '"dark"' && !document.body.classList.contains('dark') && localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
      this.setState({darkMode: true});
    }
  }

  darkMode = () => {
    const bodyElem = document.body;
    if (bodyElem.classList.contains('dark')) {
      bodyElem.classList.remove('dark');
    } else {
      bodyElem.classList.add('dark');
    }
    
    this.setState({darkMode: bodyElem.classList.contains('dark')});
    localStorage.setItem('darkMode', String(bodyElem.classList.contains('dark')));
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <nav role="navigation" className="nav-links">
          <div className={headerStyles.navi_left}>
            <Link to="/" id="main_tohp">Tyler Jones</Link>
          </div>  

          <div className={headerStyles.navi_right + ' header__right_container'}>
            <Link to="/projects" className="mainNavLinks">Projects</Link>
            <Link to="/about" className="mainNavLinks">About</Link>
            <Link to="/blog" className="mainNavLinks">Blog</Link>
            <button onClick={this.darkMode} id="darkLight_switch" className={typeof window !== 'undefined' && document.body.classList.contains('dark') ? 'dark' : 'light'}>{typeof window !== 'undefined' && document.body.classList.contains('dark') === true ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;