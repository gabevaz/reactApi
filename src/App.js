import React, { Component } from 'react';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
    <div className="App">
      <Header />
      <Main />
    </div>
);

// Outro jeito de fazer a função

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Rocketseat!</h1>
//     </div>
//   );
// }

export default App;
