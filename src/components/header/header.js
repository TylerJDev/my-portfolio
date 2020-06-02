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

  darkMode = () => {
    const bodyElem = document.body;
    if (bodyElem.classList.contains('dark')) {
      bodyElem.classList.remove('dark');
    } else {
      bodyElem.classList.add('dark');
    }

    this.setState({darkMode: bodyElem.classList.contains('dark')});
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <nav role="navigation" className="nav-links">
          <div className={headerStyles.navi_left}>
            <Link to="/">Tyler Jones</Link>
          </div>  

          <div className={headerStyles.navi_right}>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <button onClick={this.darkMode}>{this.state.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;