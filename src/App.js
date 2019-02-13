import React, { Component } from "react";

import Header from "./components/header";
import Main from "./pages/main";
import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Main />
//       </div>
//     );
//   }
// }

export default App;
