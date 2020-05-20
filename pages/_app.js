import Header from "../components/sections/Header";
import "../styles/styles.scss"
import React from "react";

function App({Component, pageProps}) {
  return (
    <div className="ed-grid">
      <Header/>
      <Component {...pageProps}/>
    </div>
  )
}

export default App
