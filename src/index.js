import ReactDOM from "react-dom"
import React from "react"
import App from "./App"

import { BrowserRouter } from "react-router-dom"
import "index.scss"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("GUI")
)
