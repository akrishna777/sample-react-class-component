// import logo from './logo.svg';
// import './App.css';

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

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          id: 101,
          name: 'GUVI',
          designation: 'Full Stack developer',
        },
        {
          id: 102,
          name: 'Rohan',
          designation: 'Machine Learning Engineer',
        },
        {
          id: 103,
          name: 'Akash',
          designation: 'Database Engineer',
        },
        {
          id: 104,
          name: 'John',
          designation: 'React developer',
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => {
              return <TableRow key={i} data={person} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header Component</h1>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>Content Component</h2>
      </div>
    )
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.designation}</td>
      </tr>
    )
  }
}
