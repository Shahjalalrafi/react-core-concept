import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
const arr = ['sakib', 'tamim', 'mushfiq']
const producDetails = [
  {name: 'photoshop',
  price: '$99.99'
  },
  {name: 'Illustrator',
  price: '$69.99'
  },
  {name: 'figma',
  price: '$49.99'
  },
  {name: 'adobe indesign',
  price: '$199.99'
  }
]
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={{backgroundColor: 'red'}}>hello {name}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* 
      <Person name={arr[0]} country="BANGLADESH"></Person>
      <Person name={arr[2]} country="CANADA"></Person>
      <Person name={arr[1]} country="INDIA"></Person> */}

      {/* {
        producDetails.map(product => <Products name ={product}></Products>)
      } */}
      
      {/* <Products name={producDetails[0]}></Products>
      <Products name={producDetails[1]}></Products>
      <Products name={producDetails[2]}></Products> */}

  <Counter></Counter>
  <Userss></Userss>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handledecrease = () => {
    setCount(count - 1)
  }

  return(
    <div>
      <h2>count : {count}</h2>
      <button onClick= {handleIncrease}>increase</button>
      <button onClick={handledecrease}>decrease</button>
    </div>
  )
}

function Userss() {
  
  const [users, setUser] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>dynamic user: {users.length}</h1>
      <ol>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ol>
    </div>
  )
}



function Products(props) {
  const design = {
    backgroundColor: 'gray',
    color: 'black',
    padding: '20px',
    float: 'left',
    width: '150px',
    borderRadius: '5px',
    margin: '5px'
  }

  return(
    <div style={design}>
      <h4>{props.name.name}</h4>
      <h6>{props.name.price}</h6>
      <button>BUY NOW</button>
    </div>
  )
}

function Person(props) {
  const design = {
    backgroundColor: 'black',
    color: 'white',
    border: '3px solid red',
    margin: '2px',
    // display: 'inline-block'
    // float: 'none'
  }
  return(
    <div style={design}>
      <h1>Name: {props.name}</h1>
      <p>country: {props.country}</p>
    </div>
  )
}

export default App;
