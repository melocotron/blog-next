import React from 'react'
import MainMenu from "../navigation/MainMenu";

const Header = () => (
  <header>
    <div className="logo">
      <img src="https://ed.team/static/images/logo.svg" alt="logo"/>
    </div>
    <MainMenu/>
  </header>
)

export default Header
