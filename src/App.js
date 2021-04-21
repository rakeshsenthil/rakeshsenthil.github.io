import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<div id="colorlib-main">
			<About></About>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;