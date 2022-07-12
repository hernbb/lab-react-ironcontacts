//import logo from './logo.svg';
import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

const contactos = contactsData.slice(0, 6)
const contactosSobrantes = contactsData.slice(7)

function App() {
  
  const [ contacts, setContacts]  = useState(contactos);
  const random = contactosSobrantes[Math.floor(Math.random()*contactsData.length)];
  const randomClick = () => {
  
    setContacts(current => [...current, random ])
  }
  const alphabeticalSort = ()=> {contacts.sort(function(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
   })}

  return (
    <div className="App-header">
    <h1>IronContacts</h1>
    <button onClick={randomClick}>Add Random Contact</button>
    <button onClick={alphabeticalSort}>Sort by name</button>
    <button onClick={randomClick}>Add Random Contact</button>
      <table>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
        </tr>
        
          {contacts.map((contacto) => {
            return (
               <tr>
              <td> <img src={contacto.pictureUrl} alt={contacto.name} className="img-contact"></img></td>
              <td>{contacto.name}</td>
              <td>{contacto.popularity.toFixed(2)}</td>
              {
        //El actor ha ha ganado un Oscar?
        contacto.wonOscar ? (
          <p>🏆</p> //Render esto si SI
        ) : (
          <></> //Render esto si NO
        )
      }
      {
        //El actor ha ha ganado un Emmy?
        contacto.wonEmmy ? (
          <p>🏆</p> //Render esto si SI
        ) : (
          <></> //Render esto si NO
        )
      }
               </tr>
              )
          })}
        
      </table>
    </div>
  );
}

export default App;
