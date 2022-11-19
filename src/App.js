import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "api3af46653"
const path = '/distributor'; 

const App = () => {
  const [input, setInput] = useState("")
  const [distributor, setdistributor] = useState([])

  //Function to fetch from our backend and update distributor array
  function getDistributor(e) {
    let distributorId = e.input
    API.get(myAPI, path + "/" + distributorId)
       .then(response => {
         console.log(response)
         let newdistributor = [...distributor]
         newdistributor.push(response)
         setdistributor(newdistributor)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>React App</h1>
      <div>
          <input placeholder="distributor id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getDistributor({input})}>Get Distributor From Backend</button>

      <h2 style={{visibility: distributor.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       distributor.map((thisdistributor, index) => {
         return (
        <div key={thisdistributor.distributorId}>
          <span><b>distributorId:</b> {thisdistributor.distributorId} - <b>Distributor Name</b>: {thisdistributor.distributorName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;