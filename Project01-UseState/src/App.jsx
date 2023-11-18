import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  let [ counter, setCounter ] = useState(0)

  const increaseCounter = () => {
    if ( counter < 10 ) {setCounter(counter+1)   
    console.log("Increase to",counter)}
    else alert('Count cannot move ahead !!!')
  }

  const decreaseCounter = () => {
    if ( counter > 0 ) {setCounter(counter-1)
    console.log("Decrease to",counter)}
    else alert('This is the limit !!!')
  }

  function jumpByFive(){
    setCounter(previousCounterValue => previousCounterValue + 5) // if we want to tp update counter based on previous counter value
    console.log("Counter value jumped to", counter)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ viteLogo } className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" style={{width: '100px'}} rel="noreferrer">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Project 1 : Counter</h1>
      <div className="card">
        <button onClick={ increaseCounter }>Click here to increase Counter</button>
        <button onClick={ decreaseCounter }>Click here to decrease Counter</button>
        <button onClick={ jumpByFive }>Click here to jump Counter by 5</button>
        <p>
          Counter value is {counter}
        </p>
      </div>
      <p className="developedBy">
        Developed by Shivam Rana
      </p>
    </>
  )
}

export default App
