import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddData from './components/AddData'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleAddData = (event) => {
    event.preventDefault();
    AddData({ persons, setPersons, name: newName, number: newNumber });
    setNewName('');
    setNewNumber('');
  };

    return (
      <div>
        <h2>Phonebook</h2>
        <div>Find Users: <input value={searchFilter} onChange={handleFilter}/></div>
        <Filter persons={persons} filter={searchFilter} />
        <h3>Add a new</h3>
        <form onSubmit={handleAddData}>
          <div>Name: <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
          <div><button type="submit">add</button></div>
        </form>
        <h3>Numbers</h3>
        <Persons persons={persons} />
      </div>
    )
}

export default App
