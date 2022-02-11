import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// JSXを使用しない場合
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!"
//     );
//   }
// }

export default App;
