import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor='bar'>bar</label>
//           <input id='bar' type='bar' onChange={() => console.log("I am clicked!")} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return(
    <div>
      <Cat _/>
      <Cat _/>
      <Cat _/>
      <Cat _/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
