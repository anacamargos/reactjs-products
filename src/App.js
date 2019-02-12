import React, { Component } from 'react';

import Header from './components/header'
import './styles.css';

// const App = () => {
//   <div className="App">
//       <Header />
//   </div>
// }
class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}



export default App;
