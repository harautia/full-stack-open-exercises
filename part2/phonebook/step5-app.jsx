import { useState } from 'react'
import Filter from './components/Filter'
import AddData from './components/AddData'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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
